import { Metadata } from "next";
import React from "react";
import ContactPage from "@/components/contact/contact";
import ContactForm from "@/components/contact/contactForm";
import WhyUsSection from "@/components/home/WhyUsSection";
import ApproachSection from "@/components/home/ApproachSection";
import Banner from "@/components/ui/banne";
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };  hero: {
    title: string;
    content: string;
    image:string;
  };
contact1:{ 
  title: string;
  address: string;
  phone: string;
  email: string;
  map: string;
  tel: string;
  fax: string;
  open: string;
  name: string;
  web: string;}[];
    admin?: {
    title: string;
    content: string;
    detail: {
      title: string;
      option: string;
      description: string;
    }[];
  };
  service:[];
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/contact`, {
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

      <ContactPage contact={data?.contact1 ?? []} hero={data?.hero} />
      <ContactForm admin={data?.admin} service={data?.service || []} />
      </main>
    </div>
  );
}
