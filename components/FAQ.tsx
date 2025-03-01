
import { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What blockchain platforms do you specialize in?",
      answer: "I specialize in Ethereum, Substrate (Polkadot ecosystem), and Cosmos SDK-based blockchains. I have extensive experience in building decentralized applications, smart contracts, and cross-chain solutions."
    },
    {
      question: "What services do you offer as a blockchain developer?",
      answer: "I offer a comprehensive range of blockchain services including smart contract development, dApp development, blockchain architecture design, wallet integration, Web3 frontend development, and blockchain consulting."
    },
    {
      question: "How long does it typically take to develop a blockchain project?",
      answer: "The timeline varies based on the complexity of the project. Simple dApps might take 2-4 weeks, while more complex systems with multiple smart contracts and integrations can take 3-6 months. I provide detailed timelines during project scoping."
    },
    {
      question: "Do you offer maintenance after project completion?",
      answer: "Yes, I provide ongoing maintenance and support services after project completion. This includes bug fixes, security updates, and feature enhancements as needed."
    },
    {
      question: "How do you ensure the security of smart contracts?",
      answer: "I follow industry best practices for smart contract security, including comprehensive testing, code reviews, and audit preparation. I implement proven security patterns and stay updated on the latest vulnerabilities and mitigations."
    },
    {
      question: "Can you integrate existing systems with blockchain technology?",
      answer: "Absolutely. I have experience integrating traditional systems with blockchain technology through APIs, oracles, and custom middleware solutions to create hybrid systems that leverage the benefits of both worlds."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <p className={styles.faqSubtitle}>Common questions about my blockchain development services</p>
      
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div 
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span className={styles.faqIcon}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            
            <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.open : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
