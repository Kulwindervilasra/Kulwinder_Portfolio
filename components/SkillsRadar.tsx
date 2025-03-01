
import { useEffect } from 'react';
import styles from '../styles/SkillsRadar.module.css';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillsRadarProps {
  skills: Skill[];
}

const SkillsRadar = ({ skills }: SkillsRadarProps) => {
  useEffect(() => {
    // This would be where we'd initialize a chart library if needed
    // For now, we're using CSS for visualization
  }, []);

  const getRadarCoordinates = (index: number, total: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / total;
    return {
      x: radius * Math.sin(angle) + 150, // Center X + offset
      y: radius * Math.cos(angle) + 150, // Center Y + offset
    };
  };

  return (
    <div className={styles.radarContainer}>
      <div className={styles.radarChart}>
        <div className={styles.radarCircles}>
          <div className={styles.circle} style={{ width: '80%', height: '80%' }}></div>
          <div className={styles.circle} style={{ width: '60%', height: '60%' }}></div>
          <div className={styles.circle} style={{ width: '40%', height: '40%' }}></div>
          <div className={styles.circle} style={{ width: '20%', height: '20%' }}></div>
        </div>
        
        <svg width="300" height="300" viewBox="0 0 300 300">
          <g>
            {/* Radar lines */}
            {skills.map((_, index) => {
              const coords = getRadarCoordinates(index, skills.length, 120);
              return (
                <line 
                  key={`line-${index}`}
                  x1="150" 
                  y1="150" 
                  x2={coords.x} 
                  y2={coords.y}
                  stroke="rgba(200, 200, 200, 0.3)"
                  strokeWidth="1"
                />
              );
            })}
            
            {/* Skill labels */}
            {skills.map((skill, index) => {
              const coords = getRadarCoordinates(index, skills.length, 140);
              return (
                <text 
                  key={`text-${index}`}
                  x={coords.x} 
                  y={coords.y}
                  textAnchor="middle"
                  className={styles.skillLabel}
                  style={{
                    fill: 'var(--text-color)',
                    fontSize: '12px',
                  }}
                >
                  {skill.name}
                </text>
              );
            })}
            
            {/* Radar polygon for skills */}
            <polygon
              points={skills.map((skill, index) => {
                const radius = (skill.level / 100) * 120;
                const coords = getRadarCoordinates(index, skills.length, radius);
                return `${coords.x},${coords.y}`;
              }).join(' ')}
              fill="rgba(107, 111, 197, 0.5)"
              stroke="rgb(107, 111, 197)"
              strokeWidth="2"
            />
            
            {/* Skill points */}
            {skills.map((skill, index) => {
              const radius = (skill.level / 100) * 120;
              const coords = getRadarCoordinates(index, skills.length, radius);
              return (
                <circle 
                  key={`point-${index}`}
                  cx={coords.x} 
                  cy={coords.y} 
                  r="4"
                  fill="white"
                  stroke="rgb(107, 111, 197)"
                  strokeWidth="2"
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SkillsRadar;
