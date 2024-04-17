import { resend } from "../libs/resend";
import VerificationEmail from "../../../emails/VerificationEmail";
import { ApiResponse } from "../types/Apiresponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mustery massage verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "Verification email sent Successfully" };
  } catch (error) {
    console.log("Error sending verification email", error);

    return { success: false, message: "Failed to send Verification email." };
  }
}
