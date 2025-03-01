import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import CertificateShowcase from "../components/CertificateShowcase";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-employed",
      location: "Remote",
      period: "Jan 2025 - Present",
      logo: "./images/freelance.png",
      description: [
        "Providing end-to-end development services for clients worldwide, specializing in blockchain and full-stack solutions.",
        "Designing and developing custom web applications using modern JavaScript frameworks like React, Next.js, and Node.js.",
        "Implementing smart contracts and decentralized applications (dApps) for various blockchain platforms.",
        "Offering technical consultation and architectural guidance to startups and established businesses.",
        "Managing projects independently from requirements gathering to deployment and maintenance.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Ethereum",
        "Solidity",
        "MongoDB",
        "GraphQL",
        "AWS",
        "Blockchain",
        "Nest.js",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Alphanet Corp",
      location: "Mohali, Punjab",
      period: "September 2024 - Jan 2025",
      logo: "./images/alpha_net_logo.jpeg",
      description: [
        "Developed and deployed microservices for Zest AI applications, scaling to handle 50,000+ credit score requests daily using Node.js and Redis.",
        "Implemented Redis-based caching strategy, reducing server costs by 30% and improving API response time by 25%.",
        "Conducted weekly mentoring sessions and code reviews, leading to a 50% reduction in bugs and improved coding standards.",
        "Designed a scalable microservices architecture using Node.js, RabbitMQ, and Docker, reducing system latency by 20%.",
      ],
      technologies: [
        "Node.js",
        "Redis",
        "Microservices",
        "RabbitMQ",
        "Docker",
        "API Design",
      ],
    },
    {
      title: "Full Stack Blockchain Developer & Team Lead",
      company: "Antier Solutions Pvt Ltd",
      location: "Mohali, Punjab",
      period: "December 2020 - July 2024",
      logo: "./images/antier.png",
      description: [
        "Led a team of 20+ developers to build and deploy blockchain-based solutions aligned with business and technical goals.",
        "Architected and delivered decentralized applications (dApps) using Ethereum, Substrate, Cosmos SDK, and Tendermint frameworks.",
        "Designed smart contracts that enable secure transactions for 5,000+ users per month.",
        "Integrated advanced blockchain tools like IPFS, Hyperledger Fabric, and Polkadot for enhanced scalability.",
        "Implemented best-of-security practices, reducing vulnerabilities by 40%.",
        "Mentored junior developers, fostering a collaborative and innovative environment.",
      ],
      technologies: [
        "Ethereum",
        "Substrate",
        "Cosmos SDK",
        "Tendermint",
        "Smart Contracts",
        "React.js",
        "Node.js",
      ],
    },
    {
      title: "Full Stack Software Developer",
      company: "Innow8 Apps Pvt Ltd",
      location: "Mohali, Punjab",
      period: "February 2019 - December 2020",
      logo: "./images/innow8.jpeg",
      description: [
        "Delivered 10+ blockchain-focused mobile and web projects, from requirements gathering to deployment.",
        "Developed scalable web applications using React.js, Node.js and MongoDB, increasing user engagement by 30% and reducing server response time by 25%.",
        "Optimized code quality by implementing unit tests and continuous integration practices, ensuring high maintainability.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Mobile Apps",
        "React Native",
        "Web3.js",
      ],
    },
    {
      title: "Software Engineer",
      company: "eNest Technologies Pvt Ltd",
      location: "Mohali, Punjab",
      period: "January 2018 - September 2018",
      logo: "./images/enest.svg",
      description: [
        "Prioritized and efficiently completed project tasks, contributing to the successful delivery of multiple projects.",
        "Coordinated cross-departmental efforts, ensuring seamless execution and timely delivery of milestones.",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "Project Coordination",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      location: "Mohali, Punjab",
      year: "2018",
      gpa: "CGPA: 7.1",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Lovely Professional University",
      location: "Ferozepur, Punjab",
      year: "2015",
      gpa: "CGPA: 7.2",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Experience | Kulwinder Singh</title>
        <meta
          name="description"
          content="Professional experience and career journey of Kulwinder Singh, Blockchain Developer with 7+ years of experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Professional Experience</h1>
          <p>
            My career journey and professional growth in blockchain development
            and full-stack engineering.
          </p>
          <a
            href="https://drive.google.com/file/d/1NrxK5tlN9CtiLf3NNe75mOGrl4_0RlXT/view"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadResumeBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.companyLogo}>
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://cdn-icons-png.flaticon.com/512/9068/9068883.png";
                      }}
                    />
                  </div>
                  <div>
                    <h2>{exp.title}</h2>
                    <h3>
                      {exp.company}{" "}
                      <span className={styles.location}>• {exp.location}</span>
                    </h3>
                    <div className={styles.period}>{exp.period}</div>
                  </div>
                </div>

                <ul className={styles.responsibilities}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.educationSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Education</h2>
          <div className={styles.educationCards}>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>
                  {edu.location} • {edu.year}
                </p>
                <div className={styles.gpa}>{edu.gpa}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/*<CertificateShowcase />*/}
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Kulwinder Singh. All rights
          reserved.
        </p>
        <div
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top ↑
        </div>
      </footer>
    </div>
  );
};

export default Experience;
