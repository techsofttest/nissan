import { Metadata } from "next";
import React from "react";
import AboutSection from "@/components/home/AboutSection";
import ApproachSection from "./ApproachSection";
import Banner from "@/components/ui/banne";
import VisionSection from "@/components/home/VisionSection";
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  hero: {
    title: string;
    content: string;
    image:string;
  };
  about: {
    title: string;
    sub: string;
    content: string;
    image: string;
  }| undefined;
page: {
  title: string;
  sub: string;
  content: string;
  image: string;
  detail:{
    title: string;
    icon:string;
    description: string;
  }[];
}| undefined;
  vission: {
    title: string;
    content: string;
    image: string;
  };
  mission: {
    title: string;
    content: string;
    image: string;
  };
   work: {
    title: string;
    sub: string;
    content: string;
    image: string;
  } | undefined;
    our: {
    sub: string;
      title: string;
    content: string;
    image: string;
    detail: {
        title: string;
        description: string;
      }[];
  } | undefined;
    contact: {
    title: string;
    content: string;
    image: string;
  } | undefined;
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/about`, {
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
        <AboutSection about={data?.about} />
         <ApproachSection work={data?.work} />
        <VisionSection our={data?.our} />
      </main>
    </div>
  );
}
