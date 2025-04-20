
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    const { name, email, phone, message } = await req.json();

    // Validate input
    if (!name || !email || !phone) {
      throw new Error("Missing required fields: name, email, and phone are required");
    }

    // Format the email content with more details
    const emailContent = `
      New Workshop Booking Request:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message || 'None provided'}
      
      Submitted at: ${new Date().toLocaleString()}
      IP: ${req.headers.get("x-forwarded-for") || "Unknown"}
      User Agent: ${req.headers.get("user-agent") || "Unknown"}
    `;

    // Send email with Resend
    const emailResponse = await resend.emails.send({
      from: "Vedsatwa Workshop <onboarding@resend.dev>",
      to: ["seminar@tellmeindia.com"],
      subject: `New Workshop Booking: ${name}`,
      text: emailContent,
      reply_to: email
    });

    console.log("Email sent successfully:", emailResponse);

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you! Your booking has been submitted successfully. We'll contact you soon." 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Error in submit-booking function:", error);
    
    // Return error response
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to submit booking. Please try again later." 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
