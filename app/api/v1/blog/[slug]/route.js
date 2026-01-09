import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog_posts";

export async function GET(request, { params }) {
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ data: post });
}
