import { NextRequest, NextResponse } from "next/server";
import { transformProject } from "@/lib/transformProject";
import type { RawProjectInput } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body: RawProjectInput = await req.json();
    const required: (keyof RawProjectInput)[] = ["projectName", "summary", "technologies", "problemItSolves", "whatIBuilt", "keyAchievements"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }
    const transformed = transformProject(body);
    return NextResponse.json(transformed, { status: 200 });
  } catch (err) {
    console.error("[transform-project]", err);
    return NextResponse.json({ error: "Failed to transform project." }, { status: 500 });
  }
}
