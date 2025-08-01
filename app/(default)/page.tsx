export const metadata = {
  title: "Home - Mudassir Ahmed",
  description: "Portfolio Landing Page of Mudassir Ahmed",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home"; // now it contains the typing effect
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      
    </>
  );
}
