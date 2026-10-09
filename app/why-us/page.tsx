import { Metadata } from "next";
import React from "react";
import AboutSection from "@/components/home/AboutSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ApproachSection from "@/components/home/ApproachSection";
import Banner from "@/components/ui/banne";
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
  highlights: {
    title: string;
    icon:string;
    option: string;
  }[];
    service: {
    title: string;
    image:string;
    content: string;
    services: string[];
  }[];
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
  client:{
    title: string;
    image: string;
  }[];
  clientpage:{
    title: string;
    sub: string;
    content: string;
    }| undefined;
   work: {
    title: string;
    sub: string;
    content: string;
    image: string;
    detail: {
        title: string;
        description:string;
        icon: string;
      }[];
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
 cta: {
    title: string;
    content: string;
    image: string;
    linkedin:string;
    youtube:string;
    email:string;
    phone:number;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/why`, {
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
         <div className="py-24 bg-white">
        <ApproachSection work={data?.work} /></div>
        <WhyUsSection page={data?.page} />
      </main>
    </div>
  );
}
