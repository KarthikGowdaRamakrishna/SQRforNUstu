"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface Job {
  id: string;
  title: string;
  company: {
    display_name: string;
  };
  location: {
    display_name: string;
  };
  description: string;
  redirect_url: string;
  salary_min?: number;
  salary_max?: number;
  created: string;
}

const formatSalary = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/test-jobs");
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setJobs(data.results || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Jobs</h1>
      <div className="max-w-6xl mx-auto grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              <span>{job.company.display_name}</span>
              <span>•</span>
              <span>{job.location.display_name}</span>
              {(job.salary_min || job.salary_max) && (
                <>
                  <span>•</span>
                  <span>
                    {formatSalary(job.salary_min || job.salary_max || 0)} -{" "}
                    {formatSalary(job.salary_max || job.salary_min || 0)}
                  </span>
                </>
              )}
            </div>
            <p className="text-gray-400 mb-4">
              {job.description.slice(0, 200)}...
            </p>
            <a
              href={job.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
