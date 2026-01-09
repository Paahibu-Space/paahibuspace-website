import { NextResponse } from "next/server";
import { team } from "@/data/team";

export async function GET() {
  const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

  try {
    const response = await fetch(`${BACKEND_API_URL}/api/v1/team`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('Error fetching team from backend:', error);
  }

  // Fallback to mock data
  return NextResponse.json({ data: team });
}
