"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Links from "./components/LinksComponent";

const blurAnimation = {
  initial: { filter: "blur(12px)", opacity: 0, y: 10 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const ProjectLink = ({ title, date, description, href = "#" }) => (
  <Link href={href} className="link-item group">
    <span className="link-title">{title}</span>
    <span className="link-metadata">{date} {description}</span>
  </Link>
);

export default function Home() {
  return (
    <main className="max-w-[650px] mx-auto px-6 py-20 pb-32">
      {/* Profile Section */}
      <motion.div
        className="flex flex-col items-start"
        {...blurAnimation}
      >
        <div className="mb-6">
          <Image
            src="/img/profile-picture.png"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full grayscale"
          />
        </div>

        <h1>Gavin Nelson</h1>
        <p className="text-muted">Designer at OpenAI</p>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="flex gap-4 mt-8 mb-12"
        initial={{ filter: "blur(12px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <Link href="#" className="nav-link">About</Link>
        <Link href="#" className="nav-link">Connect</Link>
        <Link href="#" className="nav-link">Features</Link>
      </motion.nav>

      {/* Main Content List - Continuous, no headers */}
      <motion.div
        className="space-y-1"
        initial={{ filter: "blur(12px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        <ProjectLink
          title="Interaction prototypes"
          date="2024–present"
          description="Interaction design"
        />
        <ProjectLink
          title="App icon design"
          date="2020–present"
          description="iOS and macOS app icons"
        />
        <ProjectLink
          title="Explorations"
          date="2020–present"
          description="Misc. creative exercises"
        />
        <ProjectLink
          title="Linear Navigation"
          date="2025"
          description="Product and interaction design"
        />
        <ProjectLink
          title="Linear Search"
          date="2025"
          description="Product and interaction design"
        />
        <ProjectLink
          title="Linear Documents"
          date="2024"
          description="Product and interaction design"
        />
        <ProjectLink
          title="Linear Mobile v1.0"
          date="2024"
          description="Product design"
        />
        <ProjectLink
          title="Linear homepage renders"
          date="2024"
          description="3D rendering"
        />
        <ProjectLink
          title="Crafting for iOS"
          date="2023"
          description="Interface and system design"
        />
      </motion.div>
    </main>
  );
}
