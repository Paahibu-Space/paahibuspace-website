import { NextResponse } from "next/server";
import { partners } from "@/data/partners";

export async function GET() {
  return NextResponse.json(partners);
}
