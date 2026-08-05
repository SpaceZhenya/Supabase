import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId, message } = await req.json();

  const authenticatedUserId = "получить_из_сессии_или_supabase";

  if (!authenticatedUserId || userId !== authenticatedUserId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // дальше обработка
  return NextResponse.json({ ok: true });
}
