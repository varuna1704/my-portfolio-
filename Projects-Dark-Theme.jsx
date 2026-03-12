// src/components/Projects.jsx

import { useState, useEffect } from 'react';
import '../styles/projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  // Fetch projects from GitHub API
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        // Replace with your GitHub username
        const username = 'varuna1704';
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const data = await response.json();

        // Transform GitHub data to our project format
        const formattedProjects = data
          .filter((repo) => !repo.fork && repo.description) // Only show original repos with descriptions
          .map((repo) => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' '),
            description: repo.description,
            url: repo.html_url,
            liveLink: repo.homepage || null, // If repo has a homepage URL
            language: repo.language,
            stars: repo.stargazers_count,
            topics: repo.topics || [],
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        // Fallback to static projects if API fails
        setProjects(STATIC_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Header with animated background */}
        <div className="projects-header">
          <div className="header-content">
            <h2 className="projects-title">
              <span className="title-text">My</span>
              <span className="title-highlight">Projects</span>
            </h2>
            <p className="projects-subtitle">
              Showcasing my recent work and contributions
            </p>
          </div>
          <div className="header-line"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card Top Accent */}
                <div className="card-accent"></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Header: Title & Language */}
                  <div className="card-header">
                    <h3 className="card-title">{project.title}</h3>
                    {project.language && (
                      <span className="language-badge">{project.language}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="card-description">{project.description}</p>

                  {/* Topics/Technologies */}
                  {project.topics.length > 0 && (
                    <div className="card-topics">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Card Footer: Stats & Links */}
                  <div className="card-footer">
                    <div className="card-stats">
                      {project.stars > 0 && (
                        <span className="stat">
                          <span className="stat-icon">⭐</span>
                          {project.stars}
                        </span>
                      )}
                      <span className="stat">
                        <span className="stat-icon">📅</span>
                        {project.updatedAt}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-github"
                      >
                        <span className="btn-icon">→</span>
                        Code
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-live"
                        >
                          <span className="btn-icon">→</span>
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Depth Effect */}
                <div
                  className="card-depth"
                  style={{
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                ></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="empty-state">
            <p>Unable to load projects. Please check back later.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="projects-cta">
          <div className="cta-content">
            <p className="cta-text">Want to explore more projects?</p>
            <a
              href="https://github.com/varuna1704"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              Visit GitHub
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fallback static projects
const STATIC_PROJECTS = [
  {
    id: 1,
    title: 'My Portfolio',
    description: 'Personal portfolio website built with React and Vite showcasing my skills and projects',
    url: 'https://github.com/varuna1704/my-portfolio-',
    liveLink: 'https://varuna-nikam.vercel.app',
    language: 'JavaScript',
    stars: 0,
    topics: ['React', 'Vite', 'Portfolio'],
    updatedAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: 'Gym Management System',
    description: 'Complete gym management system for tracking members, workouts, and attendance',
    url: 'https://github.com/varuna1704/gym_manage_system',
    liveLink: null,
    language: 'JavaScript',
    stars: 0,
    topics: ['Management', 'Fitness'],
    updatedAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'Farm Management System',
    description: 'Agricultural management system for farmers to manage crops and resources',
    url: 'https://github.com/varuna1704/online-system-for-farm',
    liveLink: null,
    language: 'PHP',
    stars: 0,
    topics: ['Agriculture', 'Farming'],
    updatedAt: new Date().toLocaleDateString(),
  },
];
