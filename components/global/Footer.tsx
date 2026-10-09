import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
interface Contact {
  title: string;
  address: string;
  phone: string;
  email: string;
  map: string;
  tel: string;
  fax: string;
  open: string;
  name: string;
  web: string;
}

interface Service {
  title: string;
  slug: string;
}

interface FooterProps {
  contact1: Contact[];
  service: Service[];
  admin?: {  title: string;
  content: string;
  detail: {
    title: string;
    option: string;
    description: string;
  }[];};
}
export default function Footer({contact1,service,admin}:FooterProps) {
  return (
    <footer className="bg-[#0F2628] text-white pt-16 pb-12 border-t border-[#18393D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        {/* Standard Links Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#18393D]">
          {/* Col 1 */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <Image
                src="/logo/logo.png"
                alt="Nissan Business Solutions Logo"
                width={140}
                height={36}
                style={{ width: "auto" }}
                className="h-12 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </a>
            <div className="text-[14px] text-white leading-relaxed max-w-sm font-medium" dangerouslySetInnerHTML={{__html:admin?.content ?? ""}} />
            <div className="pt-1">
              <Button
                href="/about"
                variant="primary-dark"
                size="sm"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                Know More About Us
              </Button>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-bold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-[14px] text-[#E6F3F4] font-medium">
              <li><a href="/" className="hover:text-[#5FAAAD] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#5FAAAD] transition-colors">About Us</a></li>
              <li><a href="/service" className="hover:text-[#5FAAAD] transition-colors">Services</a></li>
              <li><a href="/why-us" className="hover:text-[#5FAAAD] transition-colors">Why Choose Us</a></li>
              <li><a href="/ecosystem" className="hover:text-[#5FAAAD] transition-colors">Resources</a></li>
              <li><a href="/contact" className="hover:text-[#5FAAAD] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-bold text-white tracking-wider uppercase">Business Services</h4>
            <ul className="space-y-2 text-[14px] text-[#E6F3F4] font-medium">
              {service.map((item,index) => (
              <li  key={index} ><a href={`/service/${item.slug}`} className="hover:text-[#5FAAAD] transition-colors">{item.title}</a></li>))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-bold text-white tracking-wider uppercase">Ecosystem</h4>
            <ul className="space-y-2 text-[14px] text-[#E6F3F4] font-medium">
              {/* <li><a href="#ecosystem" className="hover:text-[#5FAAAD] transition-colors">School of Accounts</a></li> */}
              <li><a href="/training" className="hover:text-[#5FAAAD] transition-colors">Training</a></li>
              <li><a href="/placement" className="hover:text-[#5FAAAD] transition-colors">Placement Assistance</a></li>
              <li><a href="/online" className="hover:text-[#5FAAAD] transition-colors">Online EDP Training</a></li>
            </ul>
          </div>
        </div>

        {/* Office Locations & Administration Grid with clean vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#18393D]">
          {/* Head Office */}{contact1.map((item,idx) => (
          <div key={idx} className={`space-y-3 ${idx === 0 ? "lg:pr-6": "lg:px-2"} lg:border-r border-[#18393D]`}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5FAAAD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-[15px] font-bold text-[#5FAAAD] uppercase tracking-wider">{item.title}</h4>
            </div>
              <div className="text-[14px] text-white space-y-1 leading-snug font-medium [&_p_strong]:font-bold [&_p_strong]:text-white" dangerouslySetInnerHTML={{__html:item?.address ?? "" }} />
            <div className="pt-2 text-[13.5px] text-[#E6F3F4] space-y-1 border-t border-[#18393D]/60 font-medium">

            {item.tel &&  <p><span className="text-[#5FAAAD]">Tel:</span>{item.tel}</p>}
            {item.fax && <p><span className="text-[#5FAAAD]">Fax:</span>{item.fax}</p>}
             {item.name && <p><span className="text-[#5FAAAD]">Contact Person:</span>{item.name}</p>}
           
              {item.phone && <p><span className="text-[#5FAAAD]">Contact No:</span> <a href={`tel:${item.phone}`} className="hover:text-[#5FAAAD] transition-colors text-white font-semibold">{item.phone}</a></p>}
            {item.web &&   <p className="pt-1"><span className="text-[#5FAAAD]">Web:</span> <a href={item.web} target="_blank" rel="noopener noreferrer" className="hover:text-[#5FAAAD] transition-colors text-white font-medium">{item.web}</a></p>}
             {item.email &&  <p><span className="text-[#5FAAAD]">Email:</span> <a href={`mailto:${item.email}`} className="hover:text-[#5FAAAD] transition-colors text-white font-medium">{item.email}</a></p>}
            </div>
          </div>))}

          
          {/* Administration / Management */}
          <div className="space-y-4 lg:pl-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5FAAAD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="text-[15px] font-bold text-[#5FAAAD] uppercase tracking-wider">{admin?.title} </h4>
            </div>
              
            <div className="space-y-3 text-[14px]">{admin?.detail.map((item,idx) => (
              <div key={idx} className="space-y-0.5 border-b border-[#18393D]/60 pb-3">
                <p className="text-[12px] font-bold text-[#5FAAAD] uppercase tracking-wider">{item.option}</p>
                <p className="font-bold text-white text-[15px]">{item.title}</p>
                <p className="text-[13.5px] text-[#E6F3F4] font-medium">
                  Mobile: <a href={`tel:${item.description}`} className="hover:text-[#5FAAAD] transition-colors text-white font-semibold">{item.description}</a>
                </p>
              </div>))}
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[14px] text-white font-medium gap-4">
          <p>© {new Date().getFullYear()} Nissan Business Solutions Pvt Ltd. All rights reserved.</p>
          <a
            href="https://www.techsoftweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5FAAAD] font-semibold hover:underline underline-offset-4 transition-colors text-white"
          >
            Web Design Company in Kochi Techsoft
          </a>
        </div>
      </div>
    </footer>
  );
}
