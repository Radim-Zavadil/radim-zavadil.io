"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blurAnimation = {
    initial: { filter: "blur(12px)", opacity: 0, y: 10 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
};

export default function AboutPage() {
    return (
        <main className="max-w-[650px] mx-auto px-6 py-20 pb-32">
            {/* Profile Section */}
            <motion.div
                className="flex flex-col items-start"
                {...blurAnimation}
            >
                <div className="mb-6">
                    <Link href="/">
                        <Image
                            src="/img/profile-picture.png"
                            alt="Profile"
                            width={48}
                            height={48}
                            className="rounded-full grayscale cursor-pointer"
                        />
                    </Link>
                </div>

                <h1 className="mb-16">About</h1>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="space-y-8"
                initial={{ filter: "blur(12px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
                <p>
                    I am a designer at OpenAI shaping ChatGPT. Previously, I spent time at Linear and
                    GitHub.
                </p>

                <p>
                    I focus on the intersection of form and function to create experiences that effortlessly
                    become an extension of oneself. I believe in ideas over opinions, prototypes as the
                    most valuable tool for collaboration, and exploring one hundred ideas to find the
                    right one.
                </p>

                <p>
                    I am driven by curiosity and strive for a high level of craftsmanship and excellence in
                    my work.
                </p>

                <div className="pt-8">
                    <Link href="/connect" className="link-item-small group">
                        <span className="link-title">Connect</span>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
