
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Substrate Framework for Blockchain Development",
      excerpt: "Dive deep into Substrate, a powerful framework for building custom blockchains optimized for specific use cases...",
      date: "August 15, 2024",
      category: "Blockchain",
      readTime: "8 min read",
      image: "https://cdn-icons-png.flaticon.com/512/2592/2592347.png"
    },
    {
      id: 2,
      title: "Implementing Zero-Knowledge Proofs in DeFi Applications",
      excerpt: "Learn how to enhance privacy and security in decentralized finance applications using zero-knowledge proofs...",
      date: "July 28, 2024",
      category: "DeFi",
      readTime: "10 min read",
      image: "https://cdn-icons-png.flaticon.com/512/9356/9356230.png"
    },
    {
      id: 3,
      title: "Microservices Architecture with Node.js and Redis",
      excerpt: "A comprehensive guide to building scalable microservices using Node.js with Redis for efficient caching and communication...",
      date: "June 12, 2024",
      category: "Backend",
      readTime: "12 min read",
      image: "https://cdn-icons-png.flaticon.com/512/5065/5065112.png"
    },
    {
      id: 4,
      title: "Optimizing Smart Contract Gas Costs on Ethereum",
      excerpt: "Practical techniques to reduce gas consumption in your Ethereum smart contracts without compromising functionality...",
      date: "May 5, 2024",
      category: "Ethereum",
      readTime: "9 min read",
      image: "https://cdn-icons-png.flaticon.com/512/7016/7016537.png"
    },
    {
      id: 5,
      title: "Building Cross-Chain Bridges: Challenges and Solutions",
      excerpt: "An exploration of the technical challenges in creating secure and efficient bridges between different blockchain networks...",
      date: "April 20, 2024",
      category: "Infrastructure",
      readTime: "15 min read",
      image: "https://cdn-icons-png.flaticon.com/512/8699/8699597.png"
    },
    {
      id: 6,
      title: "Frontend Performance Optimization for Web3 Applications",
      excerpt: "Strategies to improve the loading speed and user experience of decentralized applications on the frontend...",
      date: "March 8, 2024",
      category: "Frontend",
      readTime: "7 min read",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Kulwinder Singh</title>
        <meta name="description" content="Technical insights and articles on blockchain development, Web3, and full-stack engineering by Kulwinder Singh" />
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
          <h1>Technical Blog</h1>
          <p>Insights, tutorials, and deep dives into blockchain and full-stack development</p>
        </motion.div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.blogImageContainer}>
                <img src={post.image} alt={post.title} className={styles.blogImage} />
                <span className={styles.category}>{post.category}</span>
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className={styles.readMoreLink}>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.newsletterSection}>
          <motion.div
            className={styles.newsletterCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Subscribe to My Newsletter</h2>
            <p>Get the latest articles and insights delivered straight to your inbox</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className={styles.privacyNote}>I respect your privacy. No spam, ever.</p>
          </motion.div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Kulwinder Singh. All rights reserved.</p>
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

export default Blog;
