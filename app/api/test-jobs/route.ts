import { NextResponse } from "next/server";
import { searchJobs } from "@/utils/adzuna";

export async function GET() {
  try {
    const jobs = await searchJobs({
      what: "software developer",
      where: "New York",
      page: 1,
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Adzuna API Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to fetch jobs",
      },
      { status: 500 }
    );
  }
}
