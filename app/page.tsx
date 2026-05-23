"use client";

import { useState, useEffect } from "react";

import AnimatedCursor from "react-animated-cursor";
import Image from "next/image";

import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import { SiFiverr } from "react-icons/si";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
      },
    },
  };

  if (loading) {
    return (

      <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white overflow-hidden">

        <div className="w-32 h-32 rounded-full border-t-4 border-purple-500 border-r-4 border-cyan-400 animate-spin"></div>

        <h1 className="mt-10 text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">

          HasnatDev

        </h1>

        <p className="mt-4 text-gray-400 tracking-[0.3em] uppercase">
          Loading Portfolio...
        </p>

      </div>
    );
  }

  return (
    

    <>
      {/* Neon Cursor */}
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        color="168,85,247"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          "button",
        ]}
      />

      <main className="min-h-screen bg-black text-white overflow-hidden scroll-smooth relative">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Navbar */}
        <nav className="fixed top-0 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl z-50">

          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold tracking-wide"
            >
              Hasnat<span className="text-purple-500">Dev</span>
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-gray-300 font-medium">

              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (

            <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-lg">

              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

            </div>
          )}

        </nav>

        {/* Hero Section */}
        <motion.section
          id="home"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-32 relative z-10 hero-mesh"
        >

          <div className="relative z-10 flex flex-col items-center gap-10">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.35em] leading-tight">
              FULL STACK DEVELOPER
            </h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-500/20 via-cyan-500/20 to-violet-500/10 blur-3xl opacity-70 animate-pulse"></div>

              {/* Rotating Border */}
              <div className="relative p-[4px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-spin-slow">

                {/* Image Container */}
                <div className="rounded-full bg-slate-950/90 p-2">

                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={180}
                    height={180}
                    priority
                    className="rounded-full object-cover w-[140px] h-[140px] md:w-[180px] md:h-[180px] border-2 border-white/10 shadow-2xl shadow-purple-500/30"
                  />

                </div>

              </div>

            </motion.div>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                <Typewriter
                  words={[
                    "Building Modern Web Experiences",
                    "Creating Premium Full Stack Apps",
                    "Designing Fast & Responsive Websites",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>

              <p className="mt-8 text-gray-300 text-base md:text-lg leading-relaxed">
                I create premium websites and scalable web applications using
                Next.js, React, Node.js, Tailwind CSS, and MongoDB.
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/30"
            >
              View Projects
              <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/cv.pdf"
              download
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition"
            >
              <FaDownload />
              Download CV
            </motion.a>

          </div>

        </motion.section>

        {/* Tech Stack */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6 relative z-10"
        >

          {/* removed duplicate profile image (hero now shows single profile) */}

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <p className="text-purple-400 mb-4 tracking-widest uppercase">
                Technologies
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                My Tech Stack
              </h2>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
              ].map((tech) => (

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                  }}
                  key={tech}
                  className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center hover:border-purple-500/50 transition"
                >

                  <h3 className="text-2xl font-semibold">
                    {tech}
                  </h3>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6 relative z-10"
        >

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <p className="text-cyan-400 mb-4 tracking-widest uppercase">
                Portfolio
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Featured Projects
              </h2>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

              {[
                {
                  title: "CyberNova AI",
                  image: "/images/cybernova.png",
                  desc: "AI-powered cybersecurity learning platform.",
                  live: "https://cyber-nova-ai.vercel.app/",
                  github: "https://github.com/25battery",
                },

                {
                  title: "SaaS Landing",
                  image: "/images/saas.png",
                  desc: "Modern startup landing page with futuristic UI.",
                  live: "https://digital-studio-virid.vercel.app/",
                  github: "https://github.com/25battery",
                },

                {
                  title: "Business Website",
                  image: "/images/buisness.png",
                  desc: "Responsive business website with premium UI.",
                  live: "https://sunnyweb.rf.gd/?i=1",
                  github: "https://github.com/25battery",
                },
              ].map((project) => (

                <motion.div
                  whileHover={{ y: -10 }}
                  key={project.title}
                  className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-purple-500/50 transition"
                >

                  <div className="relative h-56 w-full overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-110 transition duration-500"
                    />

                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-400">
                      {project.desc}
                    </p>

                    <div className="flex gap-4 mt-8">

                      <a
                        href={project.live}
                        target="_blank"
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
                      >
                        GitHub
                      </a>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6 relative z-10"
        >

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-cyan-400 mb-4 tracking-widest uppercase">
                About Me
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Passionate About Building Modern Web Experiences
              </h2>

              <p className="text-gray-400 mt-8 leading-relaxed text-lg">
                I’m Hasnat, a Full Stack Developer focused on creating modern,
                scalable, and responsive web applications.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition"
                >
                  <FaDownload />
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition"
                >
                  Contact Me
                </a>

              </div>

            </div>

            {/* Stats */}
            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-[40px] p-10">

              <div className="grid grid-cols-2 gap-8">

                <div>
                  <h3 className="text-5xl font-bold text-purple-400">
                    10+
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Projects Completed
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-cyan-400">
                    100%
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Responsive Design
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-purple-400">
                    Modern
                  </h3>

                  <p className="text-gray-400 mt-3">
                    UI/UX Development
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-cyan-400">
                    Full Stack
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Web Solutions
                  </p>
                </div>

              </div>

            </div>

          </div>

        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 px-6 relative z-10"
        >

          <div className="max-w-5xl mx-auto border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center">

            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h2>

            <p className="text-gray-400 mt-4 text-sm">
              Available for freelance work and full stack projects.
            </p>

            {/* Contact Form */}
            <form className="mt-8 grid gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />

              <button
                className="bg-gradient-to-r from-purple-600 to-cyan-500 py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

            {/* Socials */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">

              <a
                href="https://github.com/25battery"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://www.fiverr.com/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
              >
                <SiFiverr />
                Fiverr
              </a>

            </div>

          </div>

        </motion.section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center text-gray-500 relative z-10">

          <h2 className="text-3xl font-bold text-white">
            Hasnat<span className="text-purple-500">Dev</span>
          </h2>

          <p className="mt-3">
            © 2026 HasnatDev — Built with Next.js & Tailwind CSS
          </p>

        </footer>

      </main>
    </>
  );
}