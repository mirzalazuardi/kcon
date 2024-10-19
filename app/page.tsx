//import AboutSectionOne from "@/components/About/AboutSectionOne";
//import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
//import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Wa from "@/components/Wa";
import Hero from "@/components/Hero";
//import Pricing from "@/components/Pricing";
//import Testimonials from "@/components/Testimonials";
//import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAL Connect - Home",
  description: "KAL Connect is a software development company that provides various services to help your business grow and thrive.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Wa />
      <Hero />
      <Features />
      {/*<Brands />*/}
      {/*<Contact />*/}
    </>
  );
}
