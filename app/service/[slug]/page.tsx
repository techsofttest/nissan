import { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceDetail from "@/components/service/serviceDetail";
import CtaPage from "@/components/service/ctaPage";

interface Service {
  slug: string;
  title: string;
  image: string;
  content: string;
  services: string[];
}

interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  service: Service;
  otherservice: Service[];
}

async function getService(slug: string): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/service/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getService(slug);

    return {
      title: data?.seo?.meta_title || data?.service?.title || "Service",
      description: data?.seo?.meta_desc || "",
      keywords: data?.seo?.meta_key || "",
    };
  } catch {
    return {
      title: "Service",
      description: "",
    };
  }
}


export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Get service directly from database/API using slug
  const data = await getService(slug);

  const service = data.service;

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">

      <div className="py-24 bg-white">
        <ServiceDetail
          service={service}
          otherServices={data.otherservice ?? []}
        />
      </div>

      {/* CTA */}
      <CtaPage />

    </main>
  );
}