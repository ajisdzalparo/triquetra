import React from "react";
import { motion } from "framer-motion";
import Navbar from "../atoms/Navbar";
import "../../css/App.css";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import Card from "../molecules/Card";
import Footer from "../organism/Footer";
import InfoSection from "../organism/InfoSection";

const Home = () => {
  const headerAnimation = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.3 },
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

  const infoItems = [
    {
      title: "Unified Security Visibility +",
      content:
        "Converge360™ offers a dynamic workflow engine that allows organisations to automate routine security tasks and create bespoke response strategies. Whether handling a data breach or managing user access anomalies, customised workflows enhance operational efficiency.",
    },
    {
      title: "AI-Driven Threat Intelligence +",
      content:
        "Multi-channel notification capabilities ensure that alerts reach the right teams promptly, reducing response latency and enabling quick remediation.",
    },
    {
      title: "SOAR Integration +",
      content:
        "Converge360™ offers a dynamic workflow engine that allows organisations to automate routine security tasks and create bespoke response strategies. Whether handling a data breach or managing user access anomalies, customised workflows enhance operational efficiency.",
    },
    {
      title: "Compliance and Audit Management +",
      content:
        "Multi-channel notification capabilities ensure that alerts reach the right teams promptly, reducing response latency and enabling quick remediation.",
    },
    {
      title: "Customisable Workflows +",
      content: `Converge360™ offers a dynamic workflow engine that allows organisations to automate routine security tasks and create bespoke response strategies. Whether handling a data breach or managing user access anomalies, customised workflows enhance operational efficiency.
      
      Multi-channel notification capabilities ensure that alerts reach the right teams promptly, reducing response latency and enabling quick remediation.`,
    },
  ];

  return (
    <>
      <header className="landing-header">
        <motion.div
          className="relative z-10 flex flex-col justify-between h-full py-7"
          variants={headerAnimation}
          initial="initial"
          animate="animate"
        >
          <Navbar variant="transparent" />
          <div className="container mx-auto mb-2 md:mb-10">
            <div className="flex flex-col justify-center gap-6">
              <motion.div
                variants={headerAnimation}
                initial="initial"
                animate="animate"
              >
                <Typography
                  variant="heading1"
                  className="text-white leading-none md:text-4xl lg:text-5xl xl:text-6xl mb-3"
                >
                  How Too Many Security Tools Weakens Your Cybersecurity Defence
                </Typography>

                <Typography
                  variant="body"
                  className="text-white leading-none md:text-lg lg:text-xl xl:text-2xl"
                >
                  Unify Your Security Strategy: Regain Visibility, Intelligence,
                  and Automation with One Powerful Dashboard.
                </Typography>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  to="/request-early-access"
                >
                  Request Early Access
                </Button>
                <Button
                  variant="default"
                  className="w-full sm:w-auto"
                  to="/blog"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <section className="container mx-auto px-4 mt-20">
        <motion.div
          variants={sectionTextAnimation}
          initial="initial"
          animate="animate"
        >
          <Typography variant="body" className="text-center text-gray-400 mb-3">
            What is Triquetra?
          </Typography>
          <Typography
            variant="heading2"
            size="xxxxl"
            className="text-center text-base md:text-xl lg:text-2xl xl:text-3xl xl:px-10"
          >
            Triquetra Converge360™ is an AI-powered singularity platform that
            unifies and delivers real-time visibility, automated threat
            response, and continuous compliance empowering teams to reduce risk,
            act faster, and eliminate security silos with ease.
          </Typography>
        </motion.div>
      </section>

      <section className="bg-[#480CA808]">
        <motion.div
          className="mt-20 container py-16"
          variants={sectionTextAnimation}
          initial="initial"
          animate="animate"
        >
          <Typography
            variant="heading2"
            size="xxxxl"
            className="text-md md:text-xl lg:text-2xl xl:text-3xl"
          >
            What you get
          </Typography>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-10 md:gap-5 gap-3 mt-7"
            variants={cardAnimation}
            initial="initial"
            animate="animate"
          >
            <Card text="See Everything in One View" />
            <Card text="AI That Understands Context" />
            <Card text="Faster Decision, Less Fatigue" />
            <Card text="Compliance Built-in" />
          </motion.div>
        </motion.div>
      </section>

      <section className="container mt-14 flex flex-col gap-3 px-4 md:px-8">
        <Typography
          variant="body"
          size="base"
          className="md:text-sm lg:text-base xl:text-lg text-gray-400"
        >
          Our Solution
        </Typography>

        <motion.div
          variants={sectionTextAnimation}
          initial="initial"
          animate="animate"
        >
          <Typography
            variant="heading2"
            size="xxxxl"
            className="md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3"
          >
            Triquetra Converge360™ Platform Overview
          </Typography>

          <Typography className="md:text-md lg:text-lg xl:text-xl text-gray-400 mb-5">
            Converge360™ is an AI-powered singularity dashboard that
            consolidates data from SIEM, DLP, EDR, CSPM, and GRC tools. Its
            unique integration of advanced AI and SOAR capabilities makes it an
            essential platform for enterprises aiming to improve their security
            visibility, automate incident response, and streamline compliance
            management.
          </Typography>

          <InfoSection items={infoItems} />
          <div className="flex flex-col items-center">
            <Button variant="default" className="w-full md:w-[300px] mt-5">
              <a
                href="/public/pdf/Triquetra Converge360 Platform.pdf"
                target="_blank"
              >
                Download Solution Document
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="container mt-14 flex flex-col gap-3 px-4 md:px-8">
        <motion.div
          id="banner2"
          className="flex flex-col justify-center gap-8 px-8 lg:px-14 py-10 lg:h-[400px]"
          variants={sectionTextAnimation}
          initial="initial"
          animate="animate"
        >
          <Typography
            variant="body"
            size="base"
            className="md:text-md lg:text-2xl 2xl:text-[40px] text-white font-semibold"
          >
            Experience the AI + LLM Powered Cybersecurity Dashboard
          </Typography>

          <Typography
            variant="body"
            size="base"
            className="md:text-lg lg:text-xl xl:text-2xl text-white font-normal"
          >
            With Triquetra Converge360™, you’re not just getting another tool –
            you’re getting a holistic solution that brings clarity to your
            cybersecurity strategy.
          </Typography>

          <Button
            variant="secondary"
            className="w-full md:w-[250px] mt-3"
            to="/request-demo"
          >
            Request Demo
          </Button>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
