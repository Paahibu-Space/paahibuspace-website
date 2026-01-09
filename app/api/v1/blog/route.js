import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog_posts";

export async function GET() {
  return NextResponse.json({ data: blogPosts });
}
