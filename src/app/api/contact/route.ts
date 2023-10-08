import { mailOptions, transporter } from "@/config/nodemailer";
import { contactFormSchema } from "@/lib/http/api";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const mockErrorData = {
    name: 1,
    email: "a",
    message: "a",
  };
  // TODO: Add logic to keep each email record to the database.
  try {
    const validatedData = contactFormSchema.parse(data);
    await transporter.sendMail({
      ...mailOptions,
      subject: "Website Request",
      text: `Pleasec contact me on email: ${validatedData.email} Message: ${validatedData.message}`,
      html: `
      <div class="desc">
        <div>Name: ${validatedData.name}</div>
        <div>Email: ${validatedData.email}</div>
        <div>Message: ${validatedData.message}</div>
      </div>
    `,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Email sent successful!",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Some fields are not correct.",
        },
        { status: 400 },
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
}
