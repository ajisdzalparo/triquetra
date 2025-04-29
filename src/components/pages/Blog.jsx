import React from "react";
import { motion } from "framer-motion";
import Navbar from "../atoms/Navbar";
import "../../css/App.css";
import Typography from "../atoms/Typography";
import Footer from "../organism/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const headerAnimation = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const sectionTextAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <>
      <header className="blog-header">
        <motion.div
          className="relative z-10 flex flex-col justify-between h-full py-7"
          variants={headerAnimation}
          initial="initial"
          animate="animate"
        >
          <Navbar variant="transparent" />

          <div className="container mx-auto mb-10">
            <div className="flex flex-col justify-center gap-9">
              <motion.div
                variants={headerAnimation}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                  <img src="/icons/chevron-left.svg" alt=">" />
                  <Link className="text-white" to="/blog">
                    Blog
                  </Link>
                </div>
                <Typography
                  variant="heading1"
                  className="text-white leading-none md:text-4xl lg:text-5xl xl:text-6xl mb-3"
                >
                  Lost in the Tool Maze: How Fragmented Security Weakens Your
                  Cybersecurity Defence
                </Typography>

                <Typography
                  variant="body"
                  className="text-white leading-none md:text-lg lg:text-xl xl:text-2xl"
                >
                  Unify Your Security Strategy: Regain Visibility, Intelligence,
                  and Automation with One Powerful Dashboard
                </Typography>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>

      <section className="container mx-auto mt-10">
        <Typography variant="body" className="md:text-md lg:text-lg xl:text-xl">
          In today’s digital world, security teams are constantly adding more
          tools to keep up with evolving cyber threats. From IAM to SIEM, DLP to
          EDR, CSPM to GRC – each tool promises better protection. But as the
          number of tools grows, so does the complexity of managing them.
          Instead of streamlining security, this fragmented approach often
          creates more problems than it solves.
        </Typography>
      </section>

      <section className="container mx-auto mt-10">
        <Typography
          variant="heading2"
          size="xxxxl"
          className="md:text-xl lg:text-2xl xl:text-3xl text-primary-blue mb-5"
        >
          The Problem with Too Many Tools
        </Typography>
        <Typography variant="body" className="md:text-md lg:text-lg xl:text-xl">
          It sounds logical at first: more tools equal better protection. But in
          reality, juggling multiple security systems often leads to chaos and
          inefficiency. Here’s why:
        </Typography>
        <ul className="list-disc mx-7">
          <li className="md:text-md lg:text-lg xl:text-xl">
            Alert Overload: Imagine getting hundreds of notifications daily,
            each from a different tool. Security teams often feel overwhelmed
            and fatigued by the sheer volume, leading to missed critical alerts.
          </li>
          <li className="md:text-md lg:text-lg xl:text-xl">
            Data Silos: Each tool works independently, creating isolated pockets
            of data. Without integration, it’s nearly impossible to see the full
            picture when a security incident occurs.
          </li>
          <li className="md:text-md lg:text-lg xl:text-xl">
            Slow Response: Switching between different dashboards wastes
            precious time, especially when trying to respond to an active
            threat. Fragmentation directly slows down decision-making.
          </li>
          <li className="md:text-md lg:text-lg xl:text-xl">
            Compliance Nightmares: Different systems mean different reporting
            formats and fragmented audit trails, making compliance tracking a
            tedious and error-prone process.
          </li>
        </ul>
      </section>

      <section className="container mt-5">
        <Typography
          variant="heading2"
          size="xxxxl"
          className="md:text-xl lg:text-2xl xl:text-3xl text-primary-blue mb-5"
        >
          The Industry Wake-Up Call
        </Typography>
        <Typography
          variant="body"
          className="md:text-md lg:text-lg xl:text-xl mb-3"
        >
          It’s no surprise that 70% of CISOs now prioritize unified security
          dashboards to reduce risk exposure (Gartner, 2025). As security
          landscapes become more complex, organizations are realizing that
          consolidation is the key to staying ahead of threats.
        </Typography>
        <Typography variant="body" className="md:text-md lg:text-lg xl:text-xl">
          Enterprises that have integrated their security tools report a 50%
          reduction in incident response time (Forrester, 2025). Simply put, a
          unified platform means faster decisions, less manual work, and better
          threat detection
        </Typography>
      </section>

      <section className="container mt-5">
        <Typography
          variant="heading2"
          size="xxxxl"
          className="md:text-xl lg:text-2xl xl:text-3xl text-primary-blue mb-5"
        >
          Why a Unified Dashboard Makes Sense
        </Typography>
        <Typography
          variant="body"
          className="md:text-md lg:text-lg xl:text-xl mb-3"
        >
          Instead of fighting the chaos of too many tools, why not bring
          everything into one place? That’s where Triquetra Converge360™ comes
          in. It’s an AI-powered platform designed to unify visibility,
          intelligence, and automation in one powerful dashboard.
        </Typography>
      </section>

      <section className="container mt-5">
        <Typography
          variant="heading2"
          size="xxxxl"
          className="md:text-xl lg:text-2xl xl:text-3xl text-primary-blue mb-5"
        >
          What Makes Converge360™ Different?
        </Typography>
        <ul className="list-disc mx-7">
          <li className="md:text-md lg:text-lg xl:text-xl">
            Complete Visibility: One platform for data from IAM, SIEM, DLP, EDR,
            CSPM, and GRC tools. No more jumping between dashboards.
          </li>
          <li className="md:text-md lg:text-lg xl:text-xl">
            Smart Threat Detection: Advanced AI correlates data from different
            sources, spotting patterns that might go unnoticed in isolated
            systems.
          </li>
          <li className="md:text-md lg:text-lg xl:text-xl">
            Slow Response: Switching between different dashboards wastes
            precious time, especially when trying to respond to an active
            threat. Fragmentation directly slows down decision-making.
          </li>
          <li className="md:text-md lg:text-lg xl:text-xl">
            Easy Compliance: Real-time monitoring and automated reporting make
            staying compliant a lot easier, saving time and reducing stress.
          </li>
        </ul>
      </section>

      <section className="container mt-5">
        <Typography
          variant="heading2"
          size="xxxxl"
          className="md:text-xl lg:text-2xl xl:text-3xl text-primary-blue mb-5"
        >
          Real Success Stories
        </Typography>
        <Typography
          variant="body"
          className="md:text-md lg:text-lg xl:text-xl mb-3"
        >
          A leading bank that adopted Triquetra Converge360™ saw a 55% decrease
          in incident response time. By bringing all their tools under one roof,
          they were able to see the whole picture faster and act with
          confidence. Similarly, a major insurance company reduced audit
          preparation time by 50%, thanks to automated compliance tracking.
        </Typography>
      </section>

      <section className="container mt-5">
        <Typography
          variant="heading2"
          size="xxxxl"
          className="md:text-xl lg:text-2xl xl:text-3xl text-primary-blue mb-5"
        >
          The Bottom Line
        </Typography>
        <Typography
          variant="body"
          className="md:text-md lg:text-lg xl:text-xl mb-3"
        >
          Adding more tools without integration is like trying to fix a leaky
          boat by adding more buckets. Instead of containing the problem, it
          just makes things harder to manage. The smarter approach is
          consolidation – a unified, AI-driven dashboard that enhances
          visibility, intelligence, and automation.
        </Typography>
        <Typography
          variant="body"
          className="md:text-md lg:text-lg xl:text-xl mb-3"
        >
          With Triquetra Converge360™, you’re not just getting another tool –
          you’re getting a holistic solution that brings clarity to your
          cybersecurity strategy. Stop juggling tools and start making better,
          faster decisions.
        </Typography>
      </section>

      <section className="container mt-14 flex flex-col gap-3 px-4 md:px-8">
        <motion.div
          id="banner2"
          className="flex flex-col justify-center gap-8 px-8 lg:px-14 py-10 lg:py-20 lg:h-[400px] bg-primary-blue rounded-3xl"
          variants={sectionTextAnimation}
          initial="initial"
          animate="animate"
        >
          <Typography
            variant="body"
            size="base"
            className="md:text-md lg:text-lg xl:text-[40px] text-white font-semibold"
          >
            Ready to simplify your security strategy?
          </Typography>

          <Typography
            variant="body"
            size="base"
            className="md:text-sm lg:text-base xl:text-[20px] text-white font-normal"
          >
            Learn more about Triquetra Converge360™ at 
            <a className="underline mx-2" href="https://site.triquetra.cc/">
              triquetra.cc
            </a>
             or reach out at info@triquetra.cc.
          </Typography>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
