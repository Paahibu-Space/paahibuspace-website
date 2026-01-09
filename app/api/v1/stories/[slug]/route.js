import { NextResponse } from "next/server";
import { spotlights } from "@/data/spotlights";

export async function GET(request, { params }) {
  const slug = params.slug;
  const story = spotlights.find((s) => s.slug === slug);

  if (!story) {
    return NextResponse.json({ error: "Story not found" }, { status: 404 });
  }

  // Wrap in data object?? Docs say "Retrieve a full single story". Usually single resources aren't wrapped in 'data' array, but might be 'data' object. I will wrap it to be safe or just return it. 
  // Docs example for single story isn't explicitly shown with wrap, but list is. 
  // I will return the object directly or { data: story }? 
  // Let's assume standard JSON:API or similar usually wraps. "All endpoints return JSON responses." 
  // I'll wrap in data for consistency with list "data": [...]
  return NextResponse.json({ data: story });
}
