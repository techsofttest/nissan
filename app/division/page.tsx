import { Metadata } from "next";
import React from "react";
import DivisionPage from "./division";

interface Seo {
  meta_title: string;
  meta_key: string;
  meta_desc: string;
}

interface Hero {
  title: string;
  content: string;
  image: string;
}

interface Detail {
  title: string;
  icon: string;
  option: string;
  description: string;
}

interface PageSection {
  title: string;
  sub: string;
  content: string;
  image: string | null;
  detail?: Detail[];
}

interface DivisionResponse {
  seo: Seo;
  hero: Hero;
  detail: Detail[];

  training: PageSection | null;
  course: PageSection | null;
  practical: PageSection | null;
  eligibility: PageSection | null;
  duration: PageSection | null;
  metho: PageSection | null;
  comp: PageSection | null;
}

async function getDivision(): Promise<DivisionResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/division`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch division data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getDivision();

    return {
      title: data?.seo?.meta_title ?? "Divisions",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Divisions",
      description: "",
    };
  }
}

export default async function Home() {
  let data: DivisionResponse | null = null;

  try {
    data = await getDivision();
  } catch (error) {
    console.error("Error fetching division data:", error);
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F3FBFB]">
        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="text-gray-500">
            Unable to load division information.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F3FBFB] font-sans text-[#101820] antialiased selection:bg-[#0A6F8F] selection:text-white">
      <main>
        <DivisionPage data={data} />
      </main>
    </div>
  );
}