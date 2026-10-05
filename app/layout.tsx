import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

interface Contact {
  title: string;
  address: string;
  phone: string;
  email: string;
  map: string;
  tel: string;
  fax: string;
  open: string;
  facebook: string;
  web: string;
}

interface ProductResponse {
  contact1: Contact[];

  service: {
    title: string;
    slug: string;
    services: {
      title: string;
      slug: string;
    }[];
  }[];

  admin?: {
    title: string;
    content: string;
    detail: {
      title: string;
      option: string;
      description: string;
    }[];
  };
}
async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/layout`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
 let data: ProductResponse | null = null;
  data = await getSEO();
  return (
    <html lang="en"  className={`${inter.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F3FBFB] text-[#101820] selection:bg-[#5FAAAD] selection:text-white">
        <Header service={data.service}/>
        {children}
        <Footer contact1={data?.contact1} service={data.service} admin={data.admin} />
        <FloatingContact />
      </body>
    </html>
  );
}

