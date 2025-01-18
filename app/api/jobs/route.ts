import { NextResponse } from "next/server";
import { searchJobs } from "@/utils/adzuna";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const jobs = await searchJobs({
      what: searchParams.get("query") || undefined,
      where: searchParams.get("location") || undefined,
      category: searchParams.get("category") || undefined,
      page: Number(searchParams.get("page")) || 1,
    });

    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
