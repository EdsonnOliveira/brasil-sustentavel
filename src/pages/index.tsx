import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InstituteSection from "@/components/InstituteSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import TransparencySection from "@/components/TransparencySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <div className="w-full flex justify-center items-center relative">
        <Image
          src='/icon.png' 
          alt="Icon"
          width={230}
          height={230}
          className="mt-[-100px]"
        />
      </div>
      <AboutSection />
      <InstituteSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <TransparencySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
