import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SUBMISSIONS_FILE = path.join(
  process.cwd(),
  "src",
  "app",
  "api",
  "activation",
  "submissions.json"
);

function generateId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 10);
  return `act_${timestamp}_${random}`;
}

function readSubmissions(): Array<Record<string, unknown>> {
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const raw = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch {
    // If corrupted, start fresh
  }
  return [];
}

function writeSubmissions(data: Array<Record<string, unknown>>): void {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, college, state, program } = body;

    // Basic validation
    if (!name || !email || !phone || !college || !state || !program) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const id = generateId();
    const submission = {
      id,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      college: String(college).trim(),
      state: String(state).trim(),
      program: String(program).trim(),
      submittedAt: new Date().toISOString(),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    const submissions = readSubmissions();
    submissions.push(submission);
    writeSubmissions(submissions);

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (err) {
    console.error("Activation submission error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "CSDAC Activation endpoint is operational." },
    { status: 200 }
  );
}
