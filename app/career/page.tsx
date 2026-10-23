import { Metadata } from "next";
import React from "react";
import AboutSection from "@/components/online/AboutSection";
import Banner from "@/components/ui/banne";
import CareersPage from "@/components/career/career";
import ApplicationForm from "@/components/career/Applicationform";
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  about: {
  title: string;
  subtitle: string;
  content: string;
  detail:{
    title: string;
    description: string;
  }[];
}| undefined; 
  apply: {
  title: string;
  subtitle: string;
  content: string;
  detail:{
    title: string;
    description: string;
  }[];
}| undefined; 
  career: {
  title: string;
  subtitle: string;
  content: string;
  detail:{
    title: string;
    icon: string;
    description: string;
  }[];
}| undefined; 
  job: {
  title: string;
  department: string;
  description: string;
   id: number;
      employment_type: string;
      location: string;
      responsibilities: string[],
      qualifications:string;
      experience:string;
      skills: string[];
      deadline: string;
}[]; 
hero: {
    title: string;
    content: string;
    image:string;
  };
  
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/career`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getSEO();

    return {
      title: data?.seo?.meta_title ?? "Home",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Home",
    };
  }
}

export default async function Home() {
   let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <div className="relative min-h-screen bg-[#F3FBFB] text-[#101820] font-sans antialiased selection:bg-[#0A6F8F] selection:text-white overflow-x-hidden">
      <main>
                 <Banner  
                    title={data?.hero.title ?? ""}
         content={data?.hero.content ||""}
         image={data?.hero.image ||""} />
        <CareersPage profile={data?.about} career={data?.career} job={data?.job ?? []} />
        <ApplicationForm apply={data?.apply} job={data?.job ?? []} />
      </main>
    </div>
  );
}
