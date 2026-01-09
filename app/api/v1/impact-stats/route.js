import { NextResponse } from "next/server";
import { stats } from "@/data/stats";

export async function GET() {
  return NextResponse.json({ data: stats });
}
