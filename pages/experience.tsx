
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
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Alphanet Corp",
      location: "Mohali, Punjab",
      period: "September 2024 - Present",
      logo: "https://cdn-icons-png.flaticon.com/512/9173/9173061.png",
      description: [
        "Developed and deployed microservices for Zest AI applications, scaling to handle 50,000+ credit score requests daily using Node.js and Redis.",
        "Implemented Redis-based caching strategy, reducing server costs by 30% and improving API response time by 25%.",
        "Conducted weekly mentoring sessions and code reviews, leading to a 50% reduction in bugs and improved coding standards.",
        "Designed a scalable microservices architecture using Node.js, RabbitMQ, and Docker, reducing system latency by 20%."
      ],
      technologies: ["Node.js", "Redis", "Microservices", "RabbitMQ", "Docker", "API Design"]
    },
    {
      title: "Full Stack Blockchain Developer & Team Lead",
      company: "Antier Solutions Pvt Ltd",
      location: "Mohali, Punjab",
      period: "December 2020 - July 2024",
      logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
      description: [
        "Led a team of 20+ developers to build and deploy blockchain-based solutions aligned with business and technical goals.",
        "Architected and delivered decentralized applications (dApps) using Ethereum, Substrate, Cosmos SDK, and Tendermint frameworks.",
        "Designed smart contracts that enable secure transactions for 5,000+ users per month.",
        "Integrated advanced blockchain tools like IPFS, Hyperledger Fabric, and Polkadot for enhanced scalability.",
        "Implemented best-of-security practices, reducing vulnerabilities by 40%.",
        "Mentored junior developers, fostering a collaborative and innovative environment."
      ],
      technologies: ["Ethereum", "Substrate", "Cosmos SDK", "Tendermint", "Smart Contracts", "React.js", "Node.js"]
    },
    {
      title: "Full Stack Software Developer",
      company: "Innow8 Apps Pvt Ltd",
      location: "Mohali, Punjab",
      period: "February 2019 - December 2020",
      logo: "https://cdn-icons-png.flaticon.com/512/8748/8748434.png",
      description: [
        "Delivered 10+ blockchain-focused mobile and web projects, from requirements gathering to deployment.",
        "Developed scalable web applications using React.js, Node.js and MongoDB, increasing user engagement by 30% and reducing server response time by 25%.",
        "Optimized code quality by implementing unit tests and continuous integration practices, ensuring high maintainability."
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Mobile Apps", "React Native", "Web3.js"]
    },
    {
      title: "Software Engineer",
      company: "eNest Technologies Pvt Ltd",
      location: "Mohali, Punjab",
      period: "January 2018 - September 2018",
      logo: "https://cdn-icons-png.flaticon.com/512/2721/2721304.png",
      description: [
        "Prioritized and efficiently completed project tasks, contributing to the successful delivery of multiple projects.",
        "Coordinated cross-departmental efforts, ensuring seamless execution and timely delivery of milestones."
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Project Coordination"]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      location: "Mohali, Punjab",
      year: "2018",
      gpa: "CGPA: 7.1"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Lovely Professional University",
      location: "Ferozepur, Punjab",
      year: "2015",
      gpa: "CGPA: 7.2"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Experience | Kulwinder Singh</title>
        <meta name="description" content="Professional experience and career journey of Kulwinder Singh, Blockchain Developer with 7+ years of experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="/" className={styles.logo}>KS</a>
          <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/experience" className={styles.active}>Experience</a>
            <a href="/projects">Projects</a>
            <a href="/#contact">Contact</a>
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
          <p>My career journey and professional growth in blockchain development and full-stack engineering.</p>
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
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div>
                    <h2>{exp.title}</h2>
                    <h3>{exp.company} <span className={styles.location}>• {exp.location}</span></h3>
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
                    <span key={i} className={styles.techBadge}>{tech}</span>
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
                <p>{edu.location} • {edu.year}</p>
                <div className={styles.gpa}>{edu.gpa}</div>
              </div>
            ))}
          </div>
        </motion.div>
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
