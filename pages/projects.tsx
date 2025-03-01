
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
      logo: "https://cryptologos.cc/logos/5irechain-5ire-logo.png",
      link: "https://5ire.org/",
      description: "Led the development of a Substrate-based Nominated Proof-of-Stake (NPOS) blockchain with native token support and integrated applications. Implemented sustainable consensus mechanisms that reduced carbon footprint by 15%. Designed and built the validator node architecture and block explorer with real-time network statistics.",
      technologies: ["Substrate", "Polkadot", "Rust", "Web3.js", "React", "WASM"]
    },
    {
      title: "SaitaChain",
      category: "blockchain",
      image: "https://saitachain.com/saitachainlogo.png",
      logo: "https://saitachain.com/saitachainlogo.png",
      link: "https://saitachain.com/",
      description: "Architected decentralized applications for a scalable Layer 0 blockchain ecosystem, including Validator/Nominator apps and a decentralized exchange (DEX). Implemented cross-chain bridges enabling interoperability with Ethereum, Binance Smart Chain, and Polygon. Optimized smart contracts to reduce gas fees by 22%, resulting in more cost-effective transactions.",
      technologies: ["Layer 0", "Blockchain", "DApps", "DEX", "Solidity", "Cross-Chain"]
    },
    {
      title: "Shido Network",
      category: "blockchain",
      image: "https://shido.io/assets/images/brand/logo-primary.svg",
      logo: "https://cryptologos.cc/logos/shido-shido-logo.png",
      link: "https://shido.io/",
      description: "Built a Layer 1 Proof-of-Stake blockchain with interoperability across Cosmos, EVM, and WASM frameworks. Designed a modular architecture supporting a diverse ecosystem from DeFi to NFT marketplaces. Implemented a novel consensus mechanism that increased transaction throughput by 300%, handling over 10,000 TPS in stress tests while maintaining security.",
      technologies: ["Cosmos SDK", "EVM", "WASM", "PoS", "DeFi", "IBC Protocol"]
    },
    {
      title: "5ire Wallet Extension",
      category: "blockchain",
      image: "https://5ire.org/favicon.ico",
      logo: "https://5ire.org/favicon.ico",
      link: "https://chromewebstore.google.com/detail/5ire-wallet/keenhcnmdmjjhincpilijphpiohdppno",
      description: "Developed a secure browser extension for the 5ireChain ecosystem with HD wallet support and multi-account management. Implemented a custom transaction signing protocol with biometric authentication, enhancing security while maintaining usability. Integrated with 20+ dApps and DeFi protocols, allowing seamless interaction with the 5ireChain ecosystem.",
      technologies: ["Browser Extension", "JavaScript", "Web3", "Crypto", "Wallet", "HD Wallets"]
    },
    {
      title: "DeFi Yield Aggregator",
      category: "blockchain",
      image: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
      logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
      link: "https://github.com/kulwindervilasra/",
      description: "Built an advanced DeFi yield aggregator that automatically optimizes investments across multiple protocols for maximum returns. Implemented smart contract architecture with auto-compounding and strategy switching capabilities. Integrated with Aave, Compound, and Curve protocols, with real-time APY calculations and gas-optimized transactions.",
      technologies: ["Solidity", "DeFi", "Ethereum", "React", "Web3.js", "Smart Contracts"]
    },
    {
      title: "NFT Marketplace",
      category: "blockchain",
      image: "https://cdn-icons-png.flaticon.com/512/6457/6457054.png",
      logo: "https://cdn-icons-png.flaticon.com/512/6457/6457054.png",
      link: "https://github.com/kulwindervilasra/",
      description: "Developed a full-featured NFT marketplace supporting ERC-721 and ERC-1155 tokens with lazy minting capabilities. Implemented a gas-efficient royalty distribution system ensuring creators receive ongoing payments for secondary sales. Built an advanced search and discovery system with AI-driven recommendations based on user preferences and browsing history.",
      technologies: ["NFT", "Ethereum", "React", "Smart Contracts", "IPFS", "MetaMask"]
    },
    {
      title: "Zest AI Backend",
      category: "web",
      image: "https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png",
      logo: "https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png",
      link: "https://zest.ai/",
      description: "Architected and built scalable backend systems for AI-driven credit underwriting using Node.js. Designed a microservices architecture processing over 50,000 loan applications daily with 99.99% uptime. Implemented machine learning integration pipelines that reduced decision time from days to seconds while improving accuracy by 35% compared to traditional models.",
      technologies: ["Node.js", "AI/ML", "Express", "TypeScript", "APIs", "Microservices"]
    },
    {
      title: "Fantom Wallet",
      category: "blockchain",
      image: "https://fantom.foundation/favicon.ico",
      logo: "https://cryptologos.cc/logos/fantom-ftm-logo.png",
      link: "https://fantom.foundation/",
      description: "Developed a high-performance decentralized wallet enabling secure fund management, token staking, and DeFi interactions on the Fantom blockchain. Implemented advanced security features including multi-signature support, time-locked transactions, and hardware wallet integration. Created an intuitive staking interface that increased user participation in network validation by 45%.",
      technologies: ["Fantom", "Web3", "React", "Solidity", "DApps", "Opera Chain"]
    },
    {
      title: "Phantom Wallet Mobile App",
      category: "web",
      image: "https://phantom.com/favicon/favicon-32x32.png",
      logo: "https://cryptologos.cc/logos/phantom-phntm-logo.png",
      link: "https://play.google.com/store/apps/details?id=app.phantom&hl=en_IN",
      description: "Led the development of a React Native mobile app for Phantom Wallet at Innow8 Apps. Built secure wallet features with biometric authentication, transaction signing, and SPL token management. Implemented deep linking capabilities for seamless dApp connections and QR code scanning for quick payments, achieving a 4.8/5 rating on app stores with over 500,000 downloads.",
      technologies: ["React Native", "Solana", "Mobile", "Crypto", "JavaScript", "SPL Tokens"]
    },
    {
      title: "Agencia RXE",
      category: "exchange",
      image: "https://agenciarxe.com/wp-content/uploads/2023/09/logo-1.svg",
      logo: "https://agenciarxe.com/wp-content/uploads/2023/09/logo-1.svg",
      link: "https://agenciarxe.com/",
      description: "Architected a high-performance cryptocurrency exchange platform handling $50M+ in daily trading volume. Implemented a matching engine capable of processing 100,000+ orders per second with sub-millisecond latency. Designed robust security systems including cold storage solutions, multi-factor authentication, and real-time fraud detection algorithms that prevented multiple attempted attacks.",
      technologies: ["Exchange", "Trading API", "Node.js", "Security", "WebSockets", "Redis"]
    },
    {
      title: "Nexa Explorer",
      category: "blockchain",
      image: "https://nexa.org/favicon.ico",
      logo: "https://cryptologos.cc/logos/nexa-nexa-logo.png",
      link: "https://explorer.nexa.org/",
      description: "Developed a comprehensive block explorer for the Nexa blockchain with real-time data synchronization and advanced analytics. Implemented features for tracking transactions, monitoring network health, and visualizing blockchain metrics. Built custom indexing algorithms that improved query performance by 80%, allowing users to search transaction history dating back to genesis block with millisecond response times.",
      technologies: ["Next.js", "Node.js", "Block Explorer", "WebSockets", "MongoDB", "Redis"]
    },
    {
      title: "Cross-Chain Bridge Protocol",
      category: "blockchain",
      image: "https://cdn-icons-png.flaticon.com/512/8699/8699597.png",
      logo: "https://cdn-icons-png.flaticon.com/512/8699/8699597.png",
      link: "https://github.com/kulwindervilasra/",
      description: "Designed and implemented a secure cross-chain bridge enabling asset transfers between Ethereum, Binance Smart Chain, and Polygon networks. Created a validator node network with threshold signatures to secure bridge operations without centralized control. Developed liquidity pools with automated rebalancing to ensure efficient cross-chain swaps with minimal slippage, handling over $10M in weekly volume.",
      technologies: ["Cross-Chain", "Solidity", "Ethereum", "BSC", "Polygon", "Threshold Signatures"]
    },
    {
      title: "Decentralized Identity Solution",
      category: "blockchain",
      image: "https://cdn-icons-png.flaticon.com/512/2422/2422938.png",
      logo: "https://cdn-icons-png.flaticon.com/512/2422/2422938.png",
      link: "https://github.com/kulwindervilasra/",
      description: "Built a self-sovereign identity solution using blockchain technology for secure, portable digital identities. Implemented W3C DID standards and verifiable credentials, allowing users to control their personal data. Created privacy-preserving zero-knowledge proof mechanisms for selective disclosure of identity attributes, used by multiple organizations for KYC compliance while protecting user privacy.",
      technologies: ["DID", "ZKP", "Ethereum", "Identity", "Privacy", "Credentials"]
    },
    {
      title: "Stablecoin Protocol",
      category: "blockchain",
      image: "https://cdn-icons-png.flaticon.com/512/2318/2318774.png",
      logo: "https://cdn-icons-png.flaticon.com/512/2318/2318774.png",
      link: "https://github.com/kulwindervilasra/",
      description: "Developed an algorithmic stablecoin protocol maintaining a soft peg to the US dollar through dynamic supply adjustments. Implemented multiple stability mechanisms including collateralized debt positions, algorithmic market operations, and bond issuance. Created a governance system allowing token holders to vote on protocol parameters and treasury allocations, with over $25M in total value locked.",
      technologies: ["Stablecoin", "DeFi", "Solidity", "Algorithmic", "Governance", "Smart Contracts"]
    },
    {
      title: "Crypto Trading Bot",
      category: "exchange",
      image: "https://cdn-icons-png.flaticon.com/512/6119/6119641.png",
      logo: "https://cdn-icons-png.flaticon.com/512/6119/6119641.png",
      link: "https://github.com/kulwindervilasra/",
      description: "Built an advanced cryptocurrency trading bot with multiple strategy implementations including grid trading, arbitrage, and technical analysis. Integrated with major exchanges through APIs, supporting high-frequency trading with custom risk management parameters. Implemented machine learning algorithms to optimize trading strategies based on historical performance, achieving 15-20% annualized returns in various market conditions.",
      technologies: ["Trading", "Algorithms", "Node.js", "ML", "APIs", "Data Analysis"]
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
              
              <div className={styles.projectActions}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewProjectButton}>
                  View Project
                </a>
                <button className={styles.detailsButton} onClick={() => window.open(project.link, '_blank')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </button>
              </div>
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
