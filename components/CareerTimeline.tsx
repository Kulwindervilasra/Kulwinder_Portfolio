
import { useEffect } from 'react';
import styles from '../styles/CareerTimeline.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CareerTimeline = () => {
  const events = [
    {
      year: "2025",
      title: "Freelance Developer",
      description: "Started offering specialized blockchain development services to global clients, focusing on DeFi, NFT platforms, and Web3 solutions."
    },
    {
      year: "2020-2024",
      title: "Team Lead at Antier Solutions",
      description: "Led a team of 20+ developers to build and deploy blockchain-based solutions using Ethereum, Substrate, and Cosmos SDK frameworks."
    },
    {
      year: "2019-2020",
      title: "Full Stack Developer at Innow8 Apps",
      description: "Developed 10+ blockchain-focused mobile and web projects using React.js, Node.js, and MongoDB."
    },
    {
      year: "2018",
      title: "Software Engineer at eNest Technologies",
      description: "Built web applications and coordinated cross-departmental efforts to ensure seamless project delivery."
    },
    {
      year: "2017",
      title: "Graduated with Computer Science Degree",
      description: "Completed my education with a focus on software development and emerging technologies."
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className={styles.timelineContainer} ref={ref}>
      <h2 className={styles.timelineTitle}>My Career Journey</h2>
      <p className={styles.timelineSubtitle}>A chronological overview of my professional path</p>
      
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={styles.timelineEvent}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: index * 0.2 
                }
              }
            }}
          >
            <div className={styles.timelineMarker}>
              <div className={styles.timelinePoint}></div>
              <div className={styles.timelineLine}></div>
            </div>
            
            <div className={styles.timelineContent}>
              <div className={styles.timelineYear}>{event.year}</div>
              <h3 className={styles.timelineEventTitle}>{event.title}</h3>
              <p className={styles.timelineEventDesc}>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
