export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchAPI(path) {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`Failed to fetch API: ${res.statusText} at ${path}`);
  }

  const json = await res.json();
  return json.data || json; // Handle wrapped 'data' or direct response
}
