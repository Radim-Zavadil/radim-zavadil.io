"use client";
import { motion } from "framer-motion";
import Links from "./components/LinksComponent";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-8">
        <nav className="max-w-4xl mx-auto flex justify-end gap-8">
          <Link href="#" className="text-gray-900 hover:text-gray-600 transition-colors font-medium border-b-2 border-gray-900 pb-1">
            Index
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
        </nav>
      </header>

      {/* Decorative blur elements */}
      <div>
        <div className="z-0 w-10 h-52 absolute top-0 right-32 -rotate-45 rounded-full bg-gray-200 blur-3xl"></div>
        <div className="z-0 w-10 h-40 absolute top-0 right-80 -rotate-12 rounded-full bg-gray-300 blur-3xl"></div>
        <div className="z-0 w-10 h-48 absolute top-0 right-[500px] rounded-full bg-gray-200 blur-3xl"></div>
        <div className="z-0 w-10 h-60 absolute top-0 right-[670px] rotate-12 rounded-full bg-gray-100 blur-3xl"></div>
        <div className="z-0 w-10 h-48 absolute top-0 right-[850px] rotate-45 rounded-full bg-gray-200 blur-3xl"></div>
        <div className="z-0 w-10 h-36 absolute top-0 right-[1100px] rotate-45 rounded-full bg-gray-300 blur-3xl"></div>
      </div>


      <div className="flex-grow flex items-center justify-center px-10">
        <motion.div 
          className="max-w-2xl w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >

          <div className="mb-16">
            <h1>Radim Zavadil</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Software engineer
            </p>
          </div>

          {/* Latest Posts Section */}
          <div className="mb-16">
            <h2>Latest Posts</h2>
            
            <div className="space-y-6">
              <div>
                <a href="#" className="text-gray-900 font-medium hover:underline text-lg">
                  My Website Refresh
                </a>
                <p className="text-gray-600 mt-1">New perspective on personal websites.</p>
              </div>

              <div>
                <a href="#" className="text-gray-900 font-medium hover:underline text-lg">
                  Things I Use Daily: Tech Gear
                </a>
                <p className="text-gray-600 mt-1">Some of my favorite tools and gear</p>
              </div>

              <div>
                <a href="#" className="text-gray-900 font-medium hover:underline text-lg">
                  My Notion Productivity Setup
                </a>
                <p className="text-gray-600 mt-1">Workflow as a developer and creator (templates)</p>
              </div>
            </div>
          </div>

          
          <div>
            <h2>Connect</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Reach me at radimzavadil16@gmail.com. Connect with me on the platforms below.
            </p>
            
            <Links/>
          </div>
        </motion.div>
      </div>
    </main>
  );
}