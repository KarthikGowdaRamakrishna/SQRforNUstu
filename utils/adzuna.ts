const ADZUNA_BASE_URL = "https://api.adzuna.com/v1/api/jobs/us/search";

export interface JobSearchParams {
  what?: string; // keywords
  where?: string; // location
  category?: string; // job category
  page?: number;
}

export async function searchJobs(params: JobSearchParams = {}) {
  if (!process.env.ADZUNA_APP_ID || !process.env.ADZUNA_API_KEY) {
    throw new Error("Adzuna API credentials not configured");
  }

  const queryParams = new URLSearchParams({
    app_id: process.env.ADZUNA_APP_ID,
    app_key: process.env.ADZUNA_API_KEY,
    results_per_page: "20",
    what: params.what || "",
    where: params.where || "",
  });

  if (params.category) {
    queryParams.append("category", params.category);
  }

  const url = `${ADZUNA_BASE_URL}/${
    params.page || 1
  }?${queryParams.toString()}`;

  console.log("Fetching from URL:", url);

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Adzuna API error: ${response.status} - ${errorText}`);
  }

  return response.json();
}
