
import { useState } from 'react';
import styles from '../styles/CertificateShowcase.module.css';
import { motion } from 'framer-motion';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credential: string;
}

const CertificateShowcase = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const certificates: Certificate[] = [
    {
      title: "Advanced Blockchain Development",
      issuer: "Blockchain Council",
      date: "June 2023",
      image: "https://cdn-icons-png.flaticon.com/512/2599/2599636.png",
      credential: "BC12345678"
    },
    {
      title: "Ethereum Smart Contract Security",
      issuer: "Consensys Academy",
      date: "March 2023",
      image: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png",
      credential: "CSA93842"
    },
    {
      title: "Certified Blockchain Developer",
      issuer: "Blockchain Training Alliance",
      date: "October 2022",
      image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
      credential: "BTA7429361"
    }
  ];
  
  return (
    <div className={styles.certificatesContainer}>
      <h2 className={styles.sectionTitle}>Certificates & Credentials</h2>
      
      <div className={styles.certificatesGrid}>
        {certificates.map((cert, index) => (
          <motion.div 
            key={index}
            className={`${styles.certificateCard} ${activeCard === index ? styles.active : ''}`}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.certificateFront}>
              <div className={styles.certificateIcon}>
                <img src={cert.image} alt={cert.title} />
              </div>
              <h3>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <p className={styles.date}>{cert.date}</p>
              <div className={styles.viewDetails}>
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
            </div>
            
            <div className={styles.certificateBack}>
              <h3>{cert.title}</h3>
              <div className={styles.credentialDetails}>
                <div className={styles.credentialItem}>
                  <span>Issuing Organization:</span>
                  <p>{cert.issuer}</p>
                </div>
                <div className={styles.credentialItem}>
                  <span>Issue Date:</span>
                  <p>{cert.date}</p>
                </div>
                <div className={styles.credentialItem}>
                  <span>Credential ID:</span>
                  <p>{cert.credential}</p>
                </div>
              </div>
              <div className={styles.certificateActions}>
                <button className={styles.verifyButton}>Verify Credential</button>
                <button className={styles.closeButton} onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(null);
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificateShowcase;
