import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/ProjectCarousel.module.css";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const ProjectCarousel = ({ projects = [] }: { projects?: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    if (projects.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    if (projects.length === 0) return;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return (
      <div className={styles.carouselContainer}>
        <div className={styles.noProjects}>
          <p>No projects available to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
          onClick={handlePrevClick}
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id || index} className={styles.carouselSlide}>
              <div className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    height={"100"} width={"100"}
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
          onClick={handleNextClick}
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className={styles.carouselDots}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
