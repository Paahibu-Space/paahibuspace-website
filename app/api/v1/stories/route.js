import { NextResponse } from "next/server";
import { spotlights } from "@/data/spotlights";

export async function GET() {
  // Wrap in data object as per API docs
  return NextResponse.json({ data: spotlights });
}
