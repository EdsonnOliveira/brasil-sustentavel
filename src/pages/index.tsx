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
          src='/logo-icon.png'
          alt="Icon"
          width={230}
          height={230}
          className="mt-[-50px] md:mt-[-90px] mb-[-50px] md:mb-[-50px] w-32 h-32 md:w-[200px] md:h-[200px]"
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
