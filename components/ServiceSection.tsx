
import styles from '../styles/ServiceSection.module.css';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceSection = () => {
  const services: Service[] = [
    {
      title: "Custom Blockchain Development",
      description: "Building tailored blockchain solutions from concept to deployment, optimized for your specific business requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      title: "Smart Contract Development",
      description: "Creating secure, efficient, and auditable smart contracts for Ethereum, Binance Smart Chain, and other blockchain platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "DeFi Protocol Design",
      description: "Architecting decentralized finance solutions with focus on security, scalability, and user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v22"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: "Full Stack Development",
      description: "Building comprehensive web and mobile applications that interact seamlessly with blockchain technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="19" y1="12" x2="5" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.serviceHeader}>
        <h2>Specialized Services</h2>
        <p>Expert blockchain and development services tailored to your business needs</p>
      </div>
      
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.serviceIcon}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
