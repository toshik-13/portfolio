'use client';

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const blogs = [
  {
    title: "5 SEO Mistakes to Avoid",
    summary: "Common SEO pitfalls writers and marketers make — and how to fix them.",
    docLink: "https://docs.google.com/document/d/abc123",
  },
  {
    title: "How to Plan a Budget-Friendly Trip",
    summary: "Travel smart without draining your wallet — tips that actually work.",
    docLink: "https://docs.google.com/document/d/def456",
  },
  {
    title: "Top 5 AI Tools for Writers",
    summary: "From content creation to proofreading — these tools are a game changer.",
    docLink: "https://docs.google.com/document/d/ghi789",
  },
];

const aboutMe = `
Hi, I’m Toshik Audichya, a professional SEO content writer helping businesses grow through smart, search-friendly content. I write across multiple niches — including tech, travel, product reviews, digital marketing, and more — always with a clear focus on quality, clarity, and results.

My work includes blog writing, ghostwriting, infographic content, and outreach writing. I understand how to make content both engaging for readers and optimized for search engines. I combine creativity with research and data to create content that not only sounds good but performs well.

Whether it’s a tech guide, a travel article, or a product comparison, I adapt my voice and style to fit the brand and audience. My goal is simple: to deliver content that informs, connects, and converts.

Let’s create content that works and stands out.
`;

export default function WriterPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-6 md:px-20">
      <section className="max-w-4xl mx-auto mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-teal-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Toshik Audichya
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-slate-300 bg-slate-800 p-6 rounded-xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {aboutMe}
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-10 text-center text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Blog Portfolio
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] border border-indigo-600 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-teal-200 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{blog.summary}</p>
                  <Link
                    href={blog.docLink}
                    target="_blank"
                    className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-medium py-2 px-4 rounded-lg transition"
                  >
                    Read Blog
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center text-teal-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <form className="bg-slate-800 p-6 rounded-xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center py-8 border-t border-slate-700">
        <div className="flex justify-center gap-6 text-teal-400 text-xl">
          <Link href="https://twitter.com/yourhandle" target="_blank">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="mailto:youremail@example.com">
            <FaEnvelope />
          </Link>
        </div>
        <p className="mt-4 text-slate-400 text-sm">© {new Date().getFullYear()} Toshik Audichya. All rights reserved.</p>
      </footer>
    </main>
  );
}
