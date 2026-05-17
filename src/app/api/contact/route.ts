import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json();
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid contact form submission.",
        errors: validation.error.flatten(),
      },
      { status: 400 }
    );
  }

  const contactData = validation.data;

  // TODO: Replace with real email / database / webhook integration.
  console.log("Received contact submission:", contactData);

  return NextResponse.json(
    {
      success: true,
      message: "Contact submission received.",
      data: contactData,
    },
    { status: 200 }
  );
}
