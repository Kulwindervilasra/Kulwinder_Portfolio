import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import SkillsRadar from "../components/SkillsRadar";
import ProjectCarousel from "../components/ProjectCarousel";
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

const blockchainSkills = [
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

const developerSkills = [
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
const additionalSkills = [
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
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
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
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
          </motion.div>

          <motion.div
            className={styles.heroGraphic}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
          </motion.div>
        </section>

        {/* Project Carousel */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Featured Projects</h2>
            <p>A selection of my recent blockchain and web development work</p>
          </div>
          <ProjectCarousel projects={[
            {
              id: 1,
              title: "5ireChain Network",
              description: "Created a Substrate-based NPOS blockchain with native token support and applications like IDEs and Wallet extensions.",
              image: "https://5ire.org/static/media/logo-dark.9a0588a2.svg",
              link: "https://5ire.org/",
              technologies: ["Substrate", "Polkadot", "Rust", "Web3.js", "React", "WASM"]
            },
            {
              id: 2,
              title: "Zest AI",
              description: "Built backend systems for AI-driven credit underwriting using Node.js, integrating machine learning models to automate loan workflows.",
              image: "https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png",
              link: "https://zest.ai/",
              technologies: ["Node.js", "Redis", "Microservices", "RabbitMQ", "Docker", "AI/ML"]
            },
            {
              id: 3,
              title: "SaitaChain",
              description: "Implemented decentralized apps for the scalable Layer 0 blockchain ecosystem, including Validator/Nominator apps and a DEX.",
              image: "https://saitachain.com/saitachainlogo.png",
              link: "https://saitachain.com/",
              technologies: ["Layer 0", "Blockchain", "DApps", "DEX", "Solidity", "Cross-Chain"]
            }
          ]} />
        </section>

        {/* Service Section */}
        <ServiceSection />

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Blockchain Expertise</h2>
            <p>
              Specialized in cutting-edge blockchain technologies and frameworks
            </p>
          </div>

          <SkillsRadar skills={blockchainSkills} title="Blockchain Skills" />

          <div className={styles.sectionHeader} style={{ marginTop: "4rem" }}>
            <h2>Development Skills</h2>
            <p>
              Full-stack development expertise for enterprise-grade applications
            </p>
          </div>

          <SkillsRadar skills={developerSkills} title="Development Skills" />

          <div className={styles.sectionHeader} style={{ marginTop: "4rem" }}>
            <h2>Additional Skills</h2>
            <p>Complementary technologies and tools for robust solutions</p>
          </div>

          <SkillsRadar skills={additionalSkills} title="Additional Skills" />
        </section>

        {/* Experience Preview */}
        <section className={styles.experiencePreview}>
          <motion.div
            className={styles.experienceHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Professional Experience</h2>
            <p>
              7+ years of industry experience working with cutting-edge
              technologies
            </p>
            <a href="/experience" className={styles.viewMoreButton}>
              View Full Experience
            </a>
          </motion.div>

          <div className={styles.experienceCards}>
            {personalInfo.experience.slice(0, 2).map((exp, index) => (
              <motion.div
                key={index}
                className={styles.experienceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
              </motion.div>
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
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to build your next blockchain project?</h2>
            <p>
              Let's collaborate to create innovative and secure blockchain
              solutions
            </p>
            <a href="#contact" className={styles.ctaButton}>
              Get in Touch
            </a>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className={styles.contactFormSection}>
          <motion.div
            className={styles.contactFormHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's Connect</h2>
            <p>
              Have a project in mind or want to explore collaboration
              opportunities? Send me a message!
            </p>
          </motion.div>

          <div className={styles.contactFormWrapper}>
            <motion.form
              className={styles.contactForm}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
            </motion.form>

            <motion.div
              className={styles.contactMethodsGrid}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
            </motion.div>
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
