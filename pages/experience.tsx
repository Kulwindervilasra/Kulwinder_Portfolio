
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "Alphanet Corp",
      period: "Sept 2024 - Present",
      desc: "Leading backend engineering efforts, focusing on designing and implementing scalable microservices architectures to support high-performance applications.",
      responsibilities: [
        "Architect and develop scalable microservices using Node.js, NestJS, and TypeScript",
        "Implement robust CI/CD pipelines for automated testing and deployment",
        "Optimize database design and queries for high-performance applications",
        "Collaborate with cross-functional teams to align technical solutions with business requirements"
      ],
      logo: "/images/alphanet.png"
    },
    {
      title: "Fullstack Blockchain Team Lead",
      company: "Antier Solutions",
      period: "Dec 2020 - July 2025",
      desc: "Led a team of developers in building decentralized blockchain applications and solutions. Successfully delivered multiple projects involving smart contracts, DeFi platforms, and NFT marketplaces.",
      responsibilities: [
        "Led development of multiple blockchain projects including 5ireChain, SaitaChain, and Shido Network",
        "Designed and implemented smart contracts for DeFi platforms and NFT marketplaces",
        "Managed a team of 8 developers, ensuring high-quality deliverables and timely execution",
        "Conducted code reviews and provided technical mentorship to junior developers"
      ],
      logo: "/images/antier.png"
    },
    {
      title: "Full Stack Software Developer",
      company: "Innow8 Apps Pvt Ltd",
      period: "Feb 2019 - Dec 2020",
      desc: "Developed innovative web and mobile applications, enhancing user engagement and system performance through modern technologies and best practices. Contributed to both frontend and backend development.",
      responsibilities: [
        "Developed Phantom Wallet mobile app using React Native and integrated with Solana blockchain",
        "Built RESTful APIs and microservices using Node.js and Express",
        "Implemented responsive UI/UX designs with React.js and CSS frameworks",
        "Integrated payment gateways and third-party services into web applications"
      ],
      logo: "/images/innow8.png"
    },
    {
      title: "Software Engineer",
      company: "eNest Technologies Pvt Ltd",
      period: "Jan 2018 - Sept 2018",
      desc: "Worked on enterprise-level software solutions, contributing to the design, development, and deployment of multiple successful projects. Gained hands-on experience in full-stack development and agile methodologies.",
      responsibilities: [
        "Developed web applications using JavaScript, HTML, and CSS",
        "Created backend services with Node.js and MongoDB",
        "Participated in agile development processes including daily stand-ups and sprint planning",
        "Collaborated with design and product teams to deliver user-centric solutions"
      ],
      logo: "/images/enest.png"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Experience | Kulwinder Singh</title>
        <meta name="description" content="Professional experience of Kulwinder Singh, Fullstack Blockchain Developer with 7+ years of experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/">
            <a className={styles.logo}>KS</a>
          </Link>
          <nav className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/experience"><a className={styles.active}>Experience</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/#contact"><a>Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <motion.div 
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Professional Experience</h1>
          <p>7+ years of expertise in Blockchain Development and Full-stack Engineering</p>
        </motion.div>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.timelineConnector}>
                <div className={styles.timelineDot}></div>
                {index !== experiences.length - 1 && <div className={styles.timelineLine}></div>}
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.companyLogo}>
                    <img src={exp.logo || "/company-placeholder.png"} alt={exp.company} />
                  </div>
                  <div className={styles.timelineDetails}>
                    <h2>{exp.title}</h2>
                    <h3>{exp.company}</h3>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                </div>
                
                <p className={styles.description}>{exp.desc}</p>
                
                <div className={styles.responsibilities}>
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Kulwinder Singh. All rights reserved.</p>
        <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to Top ↑
        </div>
      </footer>
    </div>
  );
};

export default Experience;
