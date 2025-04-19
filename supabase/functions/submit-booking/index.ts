
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Format the email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message || 'None provided'}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Send the email using standard SMTP protocol
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Vedsatwa Booking <onboarding@resend.dev>",
        to: ["seminar@tellmeindia.com"],
        subject: `New Workshop Booking: ${name}`,
        text: emailContent,
        reply_to: email
      })
    });

    const emailResult = await emailResponse.json();
    console.log("Email sending result:", emailResult);

    if (!emailResponse.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(emailResult)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Booking submitted successfully" 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    console.error("Error in submit-booking function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to submit booking" 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
