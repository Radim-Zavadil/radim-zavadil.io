"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blurAnimation = {
    initial: { filter: "blur(12px)", opacity: 0, y: 10 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
};

const SocialLink = ({ title, href }) => (
    <Link href={href} className="link-item-small group" target={href.startsWith('mailto') ? undefined : "_blank"} rel="noopener noreferrer">
        <span className="link-title">{title}</span>
    </Link>
);

export default function ConnectPage() {
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

                <h1 className="mb-16">Connect</h1>
            </motion.div>

            {/* Social Links List */}
            <motion.div
                className="space-y-1"
                initial={{ filter: "blur(12px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
                <SocialLink
                    title="Email"
                    href="mailto:radimzavadil15@gmail.com"
                />
                <SocialLink
                    title="Twitter"
                    href="https://x.com/radimzavadil"
                />
                <SocialLink
                    title="GitHub"
                    href="https://github.com/radimzavadil"
                />
                <SocialLink
                    title="LinkedIn"
                    href="https://linkedin.com/in/radimzavadil"
                />
            </motion.div>
        </main>
    );
}
