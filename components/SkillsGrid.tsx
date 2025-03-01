
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
    // Programming Languages
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "Rust": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
    "Go": "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    "Java": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    "C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "PHP": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    
    // Frontend
    "React.js": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "Next.js": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "Vue.js": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    "Angular": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    "HTML/CSS": "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    "Redux": "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "Material UI": "https://mui.com/static/logo.png",
    "React Native": "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
    "SASS": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    "Bootstrap": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    
    // Backend
    "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "Express.js": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "NestJS": "https://docs.nestjs.com/assets/logo-small.svg",
    "Django": "https://cdn.worldvectorlogo.com/logos/django.svg",
    "Flask": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
    "FastAPI": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    "Spring Boot": "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    "Laravel": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    
    // Databases
    "MongoDB": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "PostgreSQL": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    "MySQL": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    "Redis": "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
    "Firebase": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    "Elasticsearch": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg",
    "DynamoDB": "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png",
    "Cassandra": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg",
    "SQLite": "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
    "Neo4j": "https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg",
    
    // Blockchain
    "Ethereum": "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
    "Solidity": "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
    "Web3.js": "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
    "Substrate": "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040",
    "Polkadot": "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=022",
    "Cosmos SDK": "https://v1.cosmos.network/img/favicon.ico",
    "Tendermint": "https://cryptorank-images.s3.eu-central-1.amazonaws.com/coins/tendermint1614338427723.png",
    "Smart Contracts": "https://img.icons8.com/cotton/64/blockchain-technology--v1.png",
    "IPFS": "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png",
    "Hardhat": "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png",
    "Truffle": "https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png",
    "Chainlink": "https://cryptologos.cc/logos/chainlink-link-logo.png",
    
    // DevOps & Cloud
    "Docker": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    "Kubernetes": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "GCP": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "Azure": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    "Terraform": "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
    "Jenkins": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
    "GitLab CI": "https://upload.wikimedia.org/wikipedia/commons/e/e0/GitLab_logo.svg",
    "GitHub Actions": "https://avatars.githubusercontent.com/u/44036562?s=280&v=4",
    "Ansible": "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
    "Nginx": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
    "CI/CD": "https://cdn-icons-png.flaticon.com/512/6133/6133886.png",
    
    // Testing
    "Jest": "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
    "Mocha": "https://upload.wikimedia.org/wikipedia/commons/d/de/Mocha_logo.svg",
    "Cypress": "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg",
    "Selenium": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
    "React Testing Library": "https://testing-library.com/img/octopus-128x128.png",
    "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "Pytest": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg",
    "JUnit": "https://avatars.githubusercontent.com/u/874086?s=200&v=4",
    "Testing": "https://cdn-icons-png.flaticon.com/512/2232/2232009.png",
    
    // Build Tools
    "Webpack": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
    "Babel": "https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg",
    "Vite": "https://vitejs.dev/logo.svg",
    "Rollup": "https://rollupjs.org/rollup-logo.svg",
    "npm/yarn": "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    "Gulp": "https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg",
    "Grunt": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Grunt-logo.svg",
    "Parcel": "https://parceljs.org/avatar.b1be591d.avif",
    
    // APIs & Data
    "GraphQL": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    "REST APIs": "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
    "gRPC": "https://grpc.io/img/logos/grpc-icon-color.png",
    "WebSockets": "https://cdn-icons-png.flaticon.com/512/6119/6119533.png",
    "Microservices": "https://cdn-icons-png.flaticon.com/512/7213/7213411.png",
    
    // Other
    "Agile/Scrum": "https://cdn-icons-png.flaticon.com/512/2620/2620865.png",
    "Git/GitHub": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    "Team Leadership": "https://cdn-icons-png.flaticon.com/512/1651/1651203.png",
    "UI/UX Design": "https://cdn-icons-png.flaticon.com/512/5065/5065880.png",
    "Performance Optimization": "https://cdn-icons-png.flaticon.com/512/1447/1447163.png",
    "Security Best Practices": "https://cdn-icons-png.flaticon.com/512/2335/2335353.png",
    "Project Management": "https://cdn-icons-png.flaticon.com/512/3281/3281307.png",
    "Technical Writing": "https://cdn-icons-png.flaticon.com/512/4336/4336037.png",
    "Machine Learning": "https://cdn-icons-png.flaticon.com/512/2920/2920083.png",
    "AI Integration": "https://cdn-icons-png.flaticon.com/512/2103/2103619.png",
    "RabbitMQ": "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    "Kafka": "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg",
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
