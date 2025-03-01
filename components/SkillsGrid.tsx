
import React from 'react';
import styles from '../styles/SkillsGrid.module.css';

interface Skill {
  name: string;
  level: number; // 0-100
  logo?: string;
}

interface SkillsGridProps {
  skills: Skill[];
  title?: string;
  logoUrls?: Record<string, string>;
}

const SkillsGrid = ({ skills, title, logoUrls = {} }: SkillsGridProps) => {
  // Default logos for common skills if not provided
  const defaultLogos: Record<string, string> = {
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "React.js": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "MongoDB": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "GraphQL": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    "Ethereum": "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
    "Solidity": "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
    "Web3.js": "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
    "Docker": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "CI/CD": "https://cdn-icons-png.flaticon.com/512/6133/6133886.png",
    "Testing": "https://cdn-icons-png.flaticon.com/512/2232/2232009.png",
    "Agile": "https://cdn-icons-png.flaticon.com/512/2620/2620865.png",
    "UI/UX": "https://cdn-icons-png.flaticon.com/512/5065/5065880.png",
  };

  const getLogoUrl = (skill: string) => {
    return logoUrls[skill] || defaultLogos[skill] || "https://cdn-icons-png.flaticon.com/512/4616/4616734.png";
  };

  // Calculate skill level color based on proficiency
  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return '#3dd598'; // Expert level
    if (level >= 80) return '#6b6fc5'; // Advanced level
    if (level >= 70) return '#ffc107'; // Intermediate level
    return '#ff7551'; // Beginner level
  };

  // Get skill level text
  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <div className={styles.skillsContainer}>
      {title && <h3 className={styles.skillsTitle}>{title}</h3>}
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.skillLogo}>
                <img src={skill.logo || getLogoUrl(skill.name)} alt={skill.name} />
              </div>
              <h4 className={styles.skillName}>{skill.name}</h4>
            </div>
            <div className={styles.skillProgressContainer}>
              <div 
                className={styles.skillProgress} 
                style={{ 
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${getSkillLevelColor(skill.level)} 0%, ${getSkillLevelColor(skill.level)}99 100%)`
                }}
              >
                <span className={styles.skillLevel}>
                  <span className={styles.skillLevelPercent}>{skill.level}%</span>
                  <span className={styles.skillLevelText}>{getSkillLevelText(skill.level)}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
