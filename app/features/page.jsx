"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blurAnimation = {
    initial: { filter: "blur(12px)", opacity: 0, y: 10 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
};

const FeatureItem = ({ title, metadata, href = "#" }) => (
    <Link href={href} className="link-item-small group">
        <span className="link-title">{title}</span>
        <span className="link-metadata">{metadata}</span>
    </Link>
);

export default function FeaturesPage() {
    return (
        <main className="max-w-[650px] mx-auto px-6 py-20 pb-32">
            {/* Profile Section */}
            <motion.div
                className="flex flex-col items-start mb-8"
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

                <h1>Features</h1>
            </motion.div>

            {/* Features List */}
            <motion.div
                className="space-y-1"
                initial={{ filter: "blur(12px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
                <FeatureItem
                    title="Interview with Gavin Nelson, Lovers Magazine by Spaces"
                    metadata="2025"
                />
                <FeatureItem
                    title="Dive Club podcast: Prototyping, interaction design, and SwiftUI"
                    metadata="2024"
                />
                <FeatureItem
                    title="iOS & macOS App Icon Book"
                    metadata="2024"
                />
                <FeatureItem
                    title="Workspaces #341"
                    metadata="2023"
                />
                <FeatureItem
                    title="Interview with Gavin Nelson, Product and Icon Designer"
                    metadata="2023"
                />
                <FeatureItem
                    title="Made with Sketch: How Gavin Nelson Puts the Icon in Iconic"
                    metadata="2022"
                />
                <FeatureItem
                    title="Workspaces #136"
                    metadata="2022"
                />
            </motion.div>
        </main>
    );
}
