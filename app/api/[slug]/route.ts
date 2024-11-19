import { ENDPOINTS } from "@/utils/api";
import { NextResponse } from "next/server";

const host = 'https://www.freetestapi.com/api/v1';
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug
    if (!ENDPOINTS.includes(slug)) {
      return new Response("Key not found in the API", { status: 400});
    }
    const url = host + `/${slug}/`;

    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
}
