import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";

import profile from "@/data/profile.json";
import skillsData from "@/data/skills.json";
import type { SkillCategory } from "@/types";

import { getGroupedProjects } from "@/lib/projects";

export default function Home() {
  const { featured, current, past, future } = getGroupedProjects();
  const skills = skillsData as SkillCategory[];

  return (
    <>
      {/* Resets scroll to top on every fresh page load */}
      <ScrollRestoration />

      <NavBar />

      <main>
        <HeroSection profile={profile} />

        <AboutSection />

        <ProjectsSection
          featuredProjects={featured}
          currentProjects={current}
          pastProjects={past}
          futureProjects={future}
        />

        <SkillsSection skills={skills} />

        <ContactSection profile={profile} />
      </main>

      <Footer />
    </>
  );
}
