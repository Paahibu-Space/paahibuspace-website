import { NextResponse } from "next/server";
import { spotlights } from "@/data/spotlights";

export async function GET(request, { params }) {
  const slug = params.slug;
  const story = spotlights.find((s) => s.slug === slug);

  if (!story) {
    return NextResponse.json({ error: "Story not found" }, { status: 404 });
  }

  return NextResponse.json(story);
}
