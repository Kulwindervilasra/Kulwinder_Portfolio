
import { useState, useEffect } from 'react';
import styles from '../styles/GitHubProjects.module.css';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GitHubProjects = () => {
  // For demo purposes, we'll use static data instead of API calls
  const repositories: Repository[] = [
    {
      name: "defi-yield-aggregator",
      description: "A decentralized finance yield aggregator that automatically optimizes investments across multiple protocols",
      html_url: "https://github.com/kulwindervilasra/defi-yield-aggregator",
      stargazers_count: 87,
      forks_count: 23,
      language: "Solidity"
    },
    {
      name: "nft-marketplace",
      description: "Full-featured NFT marketplace supporting ERC-721 and ERC-1155 tokens with lazy minting capabilities",
      html_url: "https://github.com/kulwindervilasra/nft-marketplace",
      stargazers_count: 64,
      forks_count: 18,
      language: "TypeScript"
    },
    {
      name: "cross-chain-bridge",
      description: "Secure cross-chain bridge enabling asset transfers between Ethereum, Binance Smart Chain, and Polygon networks",
      html_url: "https://github.com/kulwindervilasra/cross-chain-bridge",
      stargazers_count: 56,
      forks_count: 12,
      language: "JavaScript"
    },
    {
      name: "decentralized-identity",
      description: "Self-sovereign identity solution using blockchain technology for secure, portable digital identities",
      html_url: "https://github.com/kulwindervilasra/decentralized-identity",
      stargazers_count: 42,
      forks_count: 9,
      language: "TypeScript"
    }
  ];

  const languageColors: Record<string, string> = {
    "JavaScript": "#f1e05a",
    "TypeScript": "#2b7489",
    "Solidity": "#aa6746",
    "Python": "#3572A5",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "Rust": "#dea584"
  };

  return (
    <div className={styles.githubContainer}>
      <h2 className={styles.githubTitle}>Open Source Projects</h2>
      <p className={styles.githubSubtitle}>Explore some of my contributions to the developer community</p>
      
      <div className={styles.repoGrid}>
        {repositories.map((repo, index) => (
          <div key={index} className={styles.repoCard}>
            <h3 className={styles.repoName}>{repo.name}</h3>
            <p className={styles.repoDescription}>{repo.description}</p>
            
            <div className={styles.repoDetails}>
              <div className={styles.repoLanguage}>
                <span 
                  className={styles.languageDot} 
                  style={{ backgroundColor: languageColors[repo.language] || "#8b949e" }}
                ></span>
                {repo.language}
              </div>
              
              <div className={styles.repoStats}>
                <div className={styles.repoStat}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                  </svg>
                  <span>{repo.stargazers_count}</span>
                </div>
                
                <div className={styles.repoStat}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                  </svg>
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
            
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoButton}>
              View Repository
            </a>
          </div>
        ))}
      </div>
      
      <div className={styles.githubCta}>
        <a 
          href="https://github.com/kulwindervilasra" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.viewAllButton}
        >
          View All Repositories
        </a>
      </div>
    </div>
  );
};

export default GitHubProjects;
