import { NextResponse } from "next/server";
import { spotlights } from "@/data/spotlights";

export async function GET() {
  return NextResponse.json(spotlights);
}
