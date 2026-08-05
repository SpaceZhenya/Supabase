import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text) {
    return NextResponse.json({ error: "No text provided" }, { status: 400 });
  }

  const questions = [
    "1. What is the main topic of the text?",
    "2. Explain the key concept in your own words.",
    "3. What are the most important details?",
    "4. Create one example based on the text.",
    "5. What would be a likely exam question from this material?",
  ].join("\n");

  return NextResponse.json({ questions });
}
