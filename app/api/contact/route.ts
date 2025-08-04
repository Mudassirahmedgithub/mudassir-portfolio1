import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    console.log("📩 Contact API Triggered:", body);

    if (!name || !email || !company || !phone || !message) {
      console.warn("⚠️ Missing required fields.");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    console.log("🚀 Sending email via Resend...");
    const emailRes = await resend.emails.send({
      from: "Mudassir Ahmed <onboarding@resend.dev>",
      to: ["mudassirahmed915171@gmail.com"],
      subject: "New Contact Message",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    console.log("✅ Resend email sent:", emailRes?.id || "no id returned");

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    console.log("🧾 Appending to Google Sheet...");
    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), name, email, company, phone, message]],
      },
    });
    console.log("✅ Google Sheet updated:", appendRes.statusText);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ API Contact Error:", error.message || error);
    return NextResponse.json(
      { error: "Internal server error", detail: error.message || error },
      { status: 500 }
    );
  }
}
