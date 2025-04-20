
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    const emailContent = `
      New Workshop Booking:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message || 'None provided'}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    const emailResponse = await resend.emails.send({
      from: "Vedsatwa Workshop <onboarding@resend.dev>",
      to: ["seminar@tellmeindia.com"],
      subject: `New Workshop Booking: ${name}`,
      text: emailContent,
      reply_to: email
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Booking submitted successfully" }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Error in submit-booking function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || "Failed to submit booking" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});

// Verify that the edge function can be deployed
