import { Resend } from "resend";




export const sendEmail = async (to: string, subject: string, template: React.ReactNode) => {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY as string);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      react: template,
    });

    if (error) {
      console.log(`[SEND_EMAIL_FUNC] Error:`, error);
      throw error;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};