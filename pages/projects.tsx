
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "blockchain", name: "Blockchain" },
    { id: "web", name: "Web & Mobile" },
    { id: "exchange", name: "Exchanges" }
  ];

  const projects = [
    {
      title: "5ireChain Network",
      category: "blockchain",
      image: "https://5ire.org/static/media/logo-dark.9a0588a2.svg",
      logo: "https://5ire.org/favicon.ico",
      link: "https://5ire.org/",
      description: "Developed a Substrate-based Nominated Proof-of-Stake (NPOS) blockchain with native token support and integrated applications like IDEs and Wallet extensions. Achieved a 15% reduction in carbon footprint through eco-friendly infrastructure.",
      technologies: ["Substrate", "Polkadot", "Rust", "Web3.js", "React"]
    },
    {
      title: "SaitaChain",
      category: "blockchain",
      image: "https://saitachain.com/saitachainlogo.png",
      logo: "https://saitachain.com/saitachainlogo.png",
      link: "https://saitachain.com/",
      description: "Implemented decentralized applications for a scalable Layer 0 blockchain ecosystem, including Validator/Nominator apps and a decentralized exchange (DEX). Enabled seamless cross-chain interoperability and high-performance transaction processing.",
      technologies: ["Layer 0", "Blockchain", "DApps", "DEX", "Solidity"]
    },
    {
      title: "Shido Network",
      category: "blockchain",
      image: "https://shido.io/assets/images/brand/logo-primary.svg",
      logo: "https://shido.io/favicon.ico",
      link: "https://shido.io/",
      description: "Built a Layer 1 Proof-of-Stake blockchain with interoperability across Cosmos, EVM, and WASM frameworks. Designed modular architecture to support diverse use cases, from DeFi to NFT marketplaces, ensuring scalability and security.",
      technologies: ["Cosmos SDK", "EVM", "WASM", "PoS", "DeFi"]
    },
    {
      title: "5ire Wallet Extension",
      category: "blockchain",
      image: "https://5ire.org/favicon.ico",
      logo: "https://5ire.org/favicon.ico",
      link: "https://chromewebstore.google.com/detail/5ire-wallet/keenhcnmdmjjhincpilijphpiohdppno",
      description: "Developed a browser extension for the 5ireChain ecosystem, enabling users to manage assets, perform transactions, and interact with decentralized applications directly from their web browsers. Prioritized security and ease of use.",
      technologies: ["Browser Extension", "JavaScript", "Web3", "Crypto", "Wallet"]
    },
    {
      title: "Zest AI Backend",
      category: "web",
      image: "https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png",
      logo: "https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png",
      link: "https://zest.ai/",
      description: "Architected and built backend systems for AI-driven credit underwriting using Node.js. Integrated machine learning models to automate loan workflows, reducing manual intervention and improving decision-making accuracy.",
      technologies: ["Node.js", "AI/ML", "Express", "TypeScript", "APIs"]
    },
    {
      title: "Fantom Wallet",
      category: "blockchain",
      image: "https://fantom.foundation/favicon.ico",
      logo: "https://fantom.foundation/favicon.ico",
      link: "https://fantom.foundation/",
      description: "Developed a decentralized wallet enabling secure fund management, token staking, and seamless interaction with the Fantom blockchain. Ensured compliance with industry security standards and delivered an intuitive user experience.",
      technologies: ["Fantom", "Web3", "React", "Solidity", "DApps"]
    },
    {
      title: "Phantom Wallet Mobile App",
      category: "web",
      image: "https://phantom.com/favicon/favicon-32x32.png",
      logo: "https://phantom.com/favicon/favicon-32x32.png",
      link: "https://play.google.com/store/apps/details?id=app.phantom&hl=en_IN",
      description: "Developed a mobile app for Phantom Wallet using React Native at Innow8 Apps Pvt Ltd. Enabled secure crypto transactions, wallet management, and integration with Solana blockchain, ensuring a smooth user experience.",
      technologies: ["React Native", "Solana", "Mobile", "Crypto", "JavaScript"]
    },
    {
      title: "Agencia RXE",
      category: "exchange",
      image: "https://agenciarxe.com/wp-content/uploads/2023/09/logo-1.svg",
      logo: "https://agenciarxe.com/wp-content/uploads/2023/09/logo-1.svg",
      link: "https://agenciarxe.com/",
      description: "Worked on Agencia RXE, a cryptocurrency exchange platform ensuring secure and scalable trading solutions. Implemented robust security protocols and performance optimizations for high-frequency trading operations.",
      technologies: ["Exchange", "Trading API", "Node.js", "Security", "WebSockets"]
    },
    {
      title: "Nexa Explorer",
      category: "blockchain",
      image: "https://nexa.org/favicon.ico",
      logo: "https://nexa.org/favicon.ico",
      link: "https://explorer.nexa.org/",
      description: "Developed backend and frontend for the Nexa Explorer using Node.js and Next.js. Implemented features like real-time block tracking, transaction history, and network analytics to enhance transparency and usability.",
      technologies: ["Next.js", "Node.js", "Block Explorer", "WebSockets", "Database"]
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Kulwinder Singh</title>
        <meta name="description" content="Blockchain and Full-stack projects by Kulwinder Singh, showcasing expertise in Ethereum, Solidity, and Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/">
            <a className={styles.logo}>KS</a>
          </Link>
          <nav className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/experience"><a>Experience</a></Link>
            <Link href="/projects"><a className={styles.active}>Projects</a></Link>
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
          <h1>Blockchain Projects</h1>
          <p>Showcase of my leading work in blockchain technology and full-stack development</p>
        </motion.div>
        
        <motion.div 
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map(category => (
            <button 
              key={category.id}
              className={`${styles.categoryButton} ${activeCategory === category.id ? styles.activeCategory : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectLogo}>
                  <img src={project.logo} alt={project.title} />
                </div>
                <h2>{project.title}</h2>
              </div>
              
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewProjectButton}>
                View Project
              </a>
            </motion.div>
          ))}
        </div>

        <div className={styles.hireBanner}>
          <div className={styles.hireBannerContent}>
            <h2>Looking for blockchain expertise on your next project?</h2>
            <p>With 7+ years of experience in blockchain development, I can help bring your vision to life</p>
            <a href="/#contact" className={styles.hireButton}>Contact Me</a>
          </div>
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

export default Projects;
