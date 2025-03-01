
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import SkillsGrid from "../components/SkillsGrid";
import ServiceSection from "../components/ServiceSection";

// Data imported from the provided information
const personalInfo = {
  name: "Kulwinder Singh",
  occupation:
    "Fullstack Software Developer | Blockchain Expert | Team Lead with over 7 years of professional experience.",
  directMessages: [
    {
      name: "WhatsApp",
      link: "https://wa.me/+919855657566",
    },
    {
      name: "Telegram",
      link: "https://t.me/vilasraboyz",
    },
  ],
  about: [
    {
      title: "Name",
      desc: "Kulwinder Singh - A seasoned Fullstack Developer and Blockchain Expert with over 7 years of hands-on experience in designing and implementing scalable solutions.",
      logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
    },
    {
      title: "Work Experience",
      desc: "Over 7 years of professional experience specializing in full-stack development, blockchain technology, and leading high-performing teams to deliver innovative projects.",
      logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
    },
    {
      title: "Languages",
      desc: "Fluent in Punjabi, Hindi, and English, facilitating effective communication across diverse multicultural environments.",
      logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png",
    },
    {
      title: "Resume",
      desc: "Access my comprehensive resume detailing my extensive skills, qualifications, and professional journey.",
      link: "https://drive.google.com/file/d/1NrxK5tlN9CtiLf3NNe75mOGrl4_0RlXT/view",
      logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png",
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      desc: "Developing and deploying microservices for Zest AI applications, scaling to handle 50,000+ credit score requests daily using Node.js and Redis. Implemented Redis-based caching strategy, reducing server costs by 30% and improving API response time by 25%. (Sept 2024 - Present)",
      logo: "https://cdn-icons-png.flaticon.com/512/9173/9173061.png",
    },
    {
      title: "Full Stack Blockchain Developer & Team Lead",
      desc: "Led a team of 20+ developers at Antier Solutions, building decentralized applications using Ethereum, Substrate, Cosmos SDK, and Tendermint frameworks. Designed smart contracts enabling secure transactions for 5,000+ users per month and integrated advanced blockchain tools like IPFS, Hyperledger Fabric, and Polkadot. (Dec 2020 - July 2024)",
      logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    },
    {
      title: "Full Stack Software Developer",
      desc: "Delivered 10+ blockchain-focused mobile and web projects at Innow8 Apps Pvt Ltd, from requirements gathering to deployment. Developed scalable web applications using React.js, Node.js and MongoDB, increasing user engagement by 30% and reducing server response time by 25%. (Feb 2019 - Dec 2020)",
      logo: "https://cdn-icons-png.flaticon.com/512/8748/8748434.png",
    },
    {
      title: "Software Engineer",
      desc: "Prioritized and efficiently completed project tasks at eNest Technologies Pvt Ltd, contributing to the successful delivery of multiple projects. Coordinated cross-departmental efforts, ensuring seamless execution and timely delivery of milestones. (Jan 2018 - Sept 2018)",
      logo: "https://cdn-icons-png.flaticon.com/512/2721/2721304.png",
    },
  ],
};



// Blockchain skills with logos
const blockchainSkillsWithLogos = [
  {
    title: "Ethereum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
  },
  {
    title: "Substrate",
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040",
  },
  {
    title: "Solidity",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
  },
  {
    title: "Smart Contracts",
    logo: "https://img.icons8.com/cotton/64/blockchain-technology--v1.png",
  },
  {
    title: "Web3.js",
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-3-icon.png",
  },
  {
    title: "Layer 1 & 2",
    logo: "https://s3.amazonaws.com/assets.coingecko.com/app/public/ckeditor_assets/pictures/6329/content_Twitter_PoR_Roll_Out_%2814%29.png",
  },
];

const developerSkillsWithLogos = [
  {
    title: "React.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    title: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    title: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png?20190626143224",
  },
  {
    title: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    title: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
];

// Additional skills with logos
const additionalSkillsWithLogos = [
  {
    title: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    title: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    title: "Redis",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
  },
  {
    title: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    title: "RabbitMQ",
    logo: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
  },
];

const contactMethods = [
  {
    title: "WhatsApp",
    logo: "https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png",
    link: "https://wa.me/+919855657566",
    desc: "+91 9855657566",
  },
  {
    title: "Email",
    logo: "https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png",
    desc: "kulwinder.vilasra@gmail.com",
    link: "mailto:kulwinder.vilasra@gmail.com",
  },
  {
    title: "LinkedIn",
    logo: "https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png",
    link: "https://www.linkedin.com/in/kulwinder-singh-394384130/",
    desc: "Connect professionally",
  },
  {
    title: "GitHub",
    logo: "https://cdn-icons-png.flaticon.com/128/1051/1051275.png",
    link: "https://github.com/kulwindervilasra/",
    desc: "View my code",
  },
  {
    title: "Portfolio",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    link: "https://kulwindervilasra.github.io/portfolio/",
    desc: "Visit my portfolio",
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Skills data
  const blockchainSkills = [
    { name: "Ethereum", level: 95 },
    { name: "Solidity", level: 90 },
    { name: "Web3.js", level: 92 },
    { name: "Substrate", level: 88 },
    { name: "Cosmos SDK", level: 85 },
    { name: "Smart Contracts", level: 95 },
    { name: "Tendermint", level: 85 },
    { name: "Polkadot", level: 88 },
    { name: "IPFS", level: 90 }
  ];

  const frontendSkills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Redux", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Material UI", level: 90 },
    { name: "React Native", level: 85 },
    { name: "Vue.js", level: 80 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 95 },
    { name: "Express.js", level: 92 },
    { name: "NestJS", level: 88 },
    { name: "Python", level: 85 },
    { name: "Django", level: 82 },
    { name: "GraphQL", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "WebSockets", level: 88 },
    { name: "Microservices", level: 90 }
  ];

  const databaseSkills = [
    { name: "MongoDB", level: 92 },
    { name: "PostgreSQL", level: 88 },
    { name: "Redis", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 88 },
    { name: "Elasticsearch", level: 80 },
    { name: "DynamoDB", level: 82 },
    { name: "Cassandra", level: 78 }
  ];

  const devOpsSkills = [
    { name: "Docker", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "AWS", level: 88 },
    { name: "CI/CD", level: 90 },
    { name: "GitHub Actions", level: 92 },
    { name: "Jenkins", level: 85 },
    { name: "Terraform", level: 80 },
    { name: "Nginx", level: 88 }
  ];

  const testingSkills = [
    { name: "Jest", level: 90 },
    { name: "Mocha", level: 88 },
    { name: "Cypress", level: 85 },
    { name: "Selenium", level: 82 },
    { name: "React Testing Library", level: 90 },
    { name: "Postman", level: 95 },
    { name: "Pytest", level: 85 }
  ];

  const buildToolsSkills = [
    { name: "Webpack", level: 90 },
    { name: "Babel", level: 88 },
    { name: "Vite", level: 85 },
    { name: "Rollup", level: 80 },
    { name: "npm/yarn", level: 95 },
    { name: "Gulp", level: 82 },
    { name: "Grunt", level: 80 }
  ];

  const additionalSkills = [
    { name: "Agile/Scrum", level: 95 },
    { name: "Git/GitHub", level: 95 },
    { name: "Team Leadership", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Performance Optimization", level: 90 },
    { name: "Security Best Practices", level: 88 },
    { name: "Project Management", level: 92 },
    { name: "Technical Writing", level: 85 }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset form submitted status after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kulwinder Singh | Blockchain Developer Portfolio</title>
        <meta
          name="description"
          content="Fullstack Blockchain Developer with over 7 years of experience. Specialized in Ethereum, Solidity, Web3, and full-stack development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div
            className={styles.heroContent}
           
          >
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <h2 className={styles.title}>{personalInfo.occupation}</h2>

            <div className={styles.ctaContainer}>
              <a href="#contact" className={styles.primaryButton}>
                Hire Me
              </a>
              <a href="/projects" className={styles.secondaryButton}>
                View Projects
              </a>
            </div>

            <div className={styles.quickContact}>
              {contactMethods.slice(0, 4).map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactIcon}
                >
                  <img
                    src={contact.logo}
                    alt={contact.title}
                    width={28}
                    height={28}
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className={styles.heroGraphic}
           
          >
            <div className={styles.blockchainGraphic}>
              <div className={styles.blockNodes}>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.node} ${styles["node" + (index + 1)]}`}
                  ></div>
                ))}
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.connection} ${styles["connection" + (index + 1)]}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Featured Projects</h2>
            <p>A selection of my recent blockchain and web development work</p>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="https://5ire.org/static/media/logo-dark.9a0588a2.svg" alt="5ireChain Network" />
              </div>
              <div className={styles.projectContent}>
                <h3>5ireChain Network</h3>
                <p>Created a Substrate-based NPOS blockchain with native token support and applications like IDEs and Wallet extensions.</p>
                <div className={styles.technologies}>
                  {["Substrate", "Polkadot", "Rust", "Web3.js", "React", "WASM"].map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <a href="https://5ire.org/" target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
                  View Project
                </a>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png" alt="Zest AI" />
              </div>
              <div className={styles.projectContent}>
                <h3>Zest AI</h3>
                <p>Built backend systems for AI-driven credit underwriting using Node.js, integrating machine learning models to automate loan workflows.</p>
                <div className={styles.technologies}>
                  {["Node.js", "Redis", "Microservices", "RabbitMQ", "Docker", "AI/ML"].map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <a href="https://zest.ai/" target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
                  View Project
                </a>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="https://saitachain.com/saitachainlogo.png" alt="SaitaChain" />
              </div>
              <div className={styles.projectContent}>
                <h3>SaitaChain</h3>
                <p>Implemented decentralized apps for the scalable Layer 0 blockchain ecosystem, including Validator/Nominator apps and a DEX.</p>
                <div className={styles.technologies}>
                  {["Layer 0", "Blockchain", "DApps", "DEX", "Solidity", "Cross-Chain"].map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <a href="https://saitachain.com/" target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <ServiceSection />

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Technical Expertise</h2>
            <p>
              Comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Blockchain Technologies</h3>
            <p>Specialized in cutting-edge blockchain technologies and frameworks</p>
          </div>
          
          <SkillsGrid 
            skills={blockchainSkills} 
            logoUrls={{
              "Ethereum": "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
              "Solidity": "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
              "Web3.js": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-3-icon.png",
              "Substrate": "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040",
              "Cosmos SDK": "https://v1.cosmos.network/img/favicon.ico",
              "Smart Contracts": "https://img.icons8.com/cotton/64/blockchain-technology--v1.png",
              "Tendermint": "https://cryptorank-images.s3.eu-central-1.amazonaws.com/coins/tendermint1614338427723.png",
              "Polkadot": "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=022",
              "IPFS": "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Frontend Development</h3>
            <p>Building responsive and interactive user interfaces</p>
          </div>
          
          <SkillsGrid 
            skills={frontendSkills} 
            logoUrls={{
              "React.js": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              "Next.js": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
              "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
              "HTML/CSS": "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
              "Redux": "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
              "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              "Material UI": "https://mui.com/static/logo.png",
              "React Native": "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
              "Vue.js": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Backend Development</h3>
            <p>Building scalable server-side applications and APIs</p>
          </div>
          
          <SkillsGrid 
            skills={backendSkills} 
            logoUrls={{
              "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
              "Express.js": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
              "NestJS": "https://docs.nestjs.com/assets/logo-small.svg",
              "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
              "Django": "https://cdn.worldvectorlogo.com/logos/django.svg",
              "GraphQL": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
              "REST APIs": "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
              "WebSockets": "https://cdn-icons-png.flaticon.com/512/6119/6119533.png",
              "Microservices": "https://cdn-icons-png.flaticon.com/512/7213/7213411.png"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Database Technologies</h3>
            <p>Working with various database systems for different use cases</p>
          </div>
          
          <SkillsGrid 
            skills={databaseSkills} 
            logoUrls={{
              "MongoDB": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
              "PostgreSQL": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
              "Redis": "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
              "MySQL": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
              "Firebase": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
              "Elasticsearch": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg",
              "DynamoDB": "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png",
              "Cassandra": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>DevOps & Cloud</h3>
            <p>Infrastructure, deployment, and cloud services expertise</p>
          </div>
          
          <SkillsGrid 
            skills={devOpsSkills} 
            logoUrls={{
              "Docker": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
              "Kubernetes": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
              "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              "CI/CD": "https://cdn-icons-png.flaticon.com/512/6133/6133886.png",
              "GitHub Actions": "https://avatars.githubusercontent.com/u/44036562?s=280&v=4",
              "Jenkins": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
              "Terraform": "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
              "Nginx": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Testing & Quality Assurance</h3>
            <p>Ensuring code quality and reliability through testing</p>
          </div>
          
          <SkillsGrid 
            skills={testingSkills} 
            logoUrls={{
              "Jest": "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
              "Mocha": "https://upload.wikimedia.org/wikipedia/commons/d/de/Mocha_logo.svg",
              "Cypress": "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg",
              "Selenium": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
              "React Testing Library": "https://testing-library.com/img/octopus-128x128.png",
              "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
              "Pytest": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Build Tools</h3>
            <p>Tools for building and bundling applications</p>
          </div>
          
          <SkillsGrid 
            skills={buildToolsSkills} 
            logoUrls={{
              "Webpack": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
              "Babel": "https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg",
              "Vite": "https://vitejs.dev/logo.svg",
              "Rollup": "https://rollupjs.org/rollup-logo.svg",
              "npm/yarn": "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
              "Gulp": "https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg",
              "Grunt": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Grunt-logo.svg"
            }}
          />

          <div className={styles.sectionHeader} style={{ marginTop: "2rem" }}>
            <h3>Professional Skills</h3>
            <p>Additional expertise and soft skills</p>
          </div>
          
          <SkillsGrid 
            skills={additionalSkills} 
            logoUrls={{
              "Agile/Scrum": "https://cdn-icons-png.flaticon.com/512/2620/2620865.png",
              "Git/GitHub": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
              "Team Leadership": "https://cdn-icons-png.flaticon.com/512/1651/1651203.png",
              "UI/UX Design": "https://cdn-icons-png.flaticon.com/512/5065/5065880.png",
              "Performance Optimization": "https://cdn-icons-png.flaticon.com/512/1447/1447163.png",
              "Security Best Practices": "https://cdn-icons-png.flaticon.com/512/2335/2335353.png",
              "Project Management": "https://cdn-icons-png.flaticon.com/512/3281/3281307.png",
              "Technical Writing": "https://cdn-icons-png.flaticon.com/512/4336/4336037.png"
            }}
          />
        </section>

        {/* Experience Preview */}
        <section className={styles.experiencePreview}>
          <div
            className={styles.experienceHeader}
           
          >
            <h2>Professional Experience</h2>
            <p>
              7+ years of industry experience working with cutting-edge
              technologies
            </p>
            <a href="/experience" className={styles.viewMoreButton}>
              View Full Experience
            </a>
          </div>

          <div className={styles.experienceCards}>
            {personalInfo.experience.slice(0, 2).map((exp, index) => (
              <div
                key={index}
                className={styles.experienceCard}
               
              >
                <div className={styles.expLogoPlaceholder}>
                  {exp.logo ? (
                    <img
                      src={
                        exp.logo.startsWith("/")
                          ? "/company-placeholder.png"
                          : exp.logo
                      }
                      alt={exp.title}
                    />
                  ) : (
                    <div className={styles.companyInitial}>{exp.title[0]}</div>
                  )}
                </div>
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <h2>Client Testimonials</h2>
            <p>What clients and colleagues say about working with me</p>
          </div>

          <div className={styles.testimonialSlider}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>
                  "Kulwinder delivered exceptional results for our DeFi project.
                  His technical expertise and ability to solve complex
                  blockchain challenges made him an invaluable asset to our
                  team. Would definitely work with him again!"
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />
                <div>
                  <h4>Alex Thompson</h4>
                  <p>CTO, DeFi Solutions</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>
                  "Working with Kulwinder transformed our blockchain
                  infrastructure. His deep understanding of both frontend and
                  backend technologies helped us create a seamless user
                  experience while maintaining robust security standards."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                />
                <div>
                  <h4>Sarah Johnson</h4>
                  <p>Product Manager, CryptoTech</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>
                  "Kulwinder's leadership skills are exceptional. He guided our
                  development team through challenging projects with clear
                  communication and technical excellence. His blockchain
                  expertise significantly accelerated our time to market."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <img
                  src="https://randomuser.me/api/portraits/men/62.jpg"
                  alt="Client"
                />
                <div>
                  <h4>Michael Chen</h4>
                  <p>Founder, BlockChain Ventures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner}>
          <div
            className={styles.ctaContent}
           
          >
            <h2>Ready to build your next blockchain project?</h2>
            <p>
              Let's collaborate to create innovative and secure blockchain
              solutions
            </p>
            <a href="#contact" className={styles.ctaButton}>
              Get in Touch
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className={styles.contactFormSection}>
          <div
            className={styles.contactFormHeader}
           
          >
            <h2>Let's Connect</h2>
            <p>
              Have a project in mind or want to explore collaboration
              opportunities? Send me a message!
            </p>
          </div>

          <div className={styles.contactFormWrapper}>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
             
            >
              {formSubmitted ? (
                <div className={styles.formSuccess}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for contacting me. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="I'd like to discuss a blockchain project..."
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </>
              )}
            </form>

            <div
              className={styles.contactMethodsGrid}
             
            >
              {contactMethods.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactMethod}
                >
                  <div className={styles.contactMethodIcon}>
                    <img
                      src={contact.logo}
                      alt={contact.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className={styles.contactMethodInfo}>
                    <h3>{contact.title}</h3>
                    <p>{contact.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Kulwinder Singh. All rights
            reserved.
          </p>
        </div>
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

export default Home;
