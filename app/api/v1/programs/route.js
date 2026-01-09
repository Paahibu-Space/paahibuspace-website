import { NextResponse } from 'next/server';

// Mock programs data - replace with actual database calls when ready
const programs = [
  {
    id: 99,
    slug: "grow-program",
    name: "GROW Program",
    description: "A comprehensive accelerator designed to help women-led startups scale through mentorship, training, and access to capital.",
    is_application_open: true,
    application_status: "Open",
    application_link: "https://forms.gle/your-grow-form-link",
    application_start_date: "2026-01-01",
    application_end_date: "2026-12-31",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-09T00:00:00Z"
  },
  {
    id: 100,
    slug: "widei-program",
    name: "WiDEI Program",
    description: "Women in Digital Entrepreneurship & Innovation - bridging the digital divide for women in the informal sector.",
    is_application_open: false,
    application_status: "Closed",
    application_link: "https://forms.gle/your-widei-form-link",
    application_start_date: "2026-03-01",
    application_end_date: "2026-03-31",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-09T00:00:00Z"
  },
  {
    id: 101,
    slug: "techsistars-program",
    name: "TechsiStars Mentorship Program",
    description: "An intensive coding bootcamp and mentorship program for young women aspiring to become software developers.",
    is_application_open: true,
    application_status: "Open",
    application_link: "https://forms.gle/your-techsistars-form-link",
    application_start_date: "2026-01-01",
    application_end_date: "2026-12-31",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-09T00:00:00Z"
  },
  {
    id: 102,
    slug: "widib-program",
    name: "WiDiB Program",
    description: "Women in Digital Business - a 5-week intensive program to transform side hustles into profitable digital businesses.",
    is_application_open: false,
    application_status: "Closed",
    application_link: "https://forms.gle/your-widib-form-link",
    application_start_date: "2026-10-01",
    application_end_date: "2026-11-15",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-09T00:00:00Z"
  },
  {
    id: 103,
    slug: "skills2work-program",
    name: "Skills2Work Program",
    description: "Soft skills and career readiness training to prepare graduates for the modern workplace.",
    is_application_open: false,
    application_status: "Coming Soon",
    application_link: "https://forms.gle/your-skills2work-form-link",
    application_start_date: "2026-06-01",
    application_end_date: "2026-08-31",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-09T00:00:00Z"
  },
  {
    id: 104,
    slug: "community-ambassadors-program",
    name: "Community Ambassadors Program",
    description: "A network of leaders championing digital literacy in their local communities.",
    is_application_open: true,
    application_status: "Open",
    application_link: "https://forms.gle/your-ambassadors-form-link",
    application_start_date: "2026-01-01",
    application_end_date: "2026-12-31",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-09T00:00:00Z"
  }
];

// ... keep mock programs array as fallback ...

export async function GET(request) {
  const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

  try {
    // 1. Try fetching from the real Laravel Backend
    console.log(`Fetching programs from: ${BACKEND_API_URL}/api/v1/programs`);
    const response = await fetch(`${BACKEND_API_URL}/api/v1/programs`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully fetched programs from CMS");
      return NextResponse.json(data);
    } 
    
    console.warn(`Backend returned ${response.status}. Falling back to mock data.`);
  } catch (error) {
    console.error('Error fetching from backend, using fallback data:', error.message);
  }

  // 2. Fallback to mock data if backend fails
  return NextResponse.json({
    data: programs,
    meta: {
      total: programs.length,
      source: "mock_fallback"
    }
  });
}
