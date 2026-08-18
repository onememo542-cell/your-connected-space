import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { SkillsPreview } from "@/components/sections/home/SkillsPreview";
import { Projects } from "@/components/sections/Projects";
import { ExperiencePreview } from "@/components/sections/home/ExperiencePreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCta } from "@/components/sections/home/ContactCta";
import heroIso from "@/assets/hero-iso.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mostafa Samir, Senior Full Stack Engineer specializing in .NET 8 microservices and Next.js marketplaces.",
      },
      { property: "og:title", content: "Mostafa Samir | Senior Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Mostafa Samir, Senior Full Stack Engineer specializing in .NET 8 microservices and Next.js marketplaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroIso, fetchPriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ExperiencePreview />
        <AboutPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
