// src/components/Projects.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.css';

// Featured projects with custom images and metadata
const FEATURED_PROJECTS = [
  {
    id: 'feat-1',
    title: 'AI Customer Review Generator',
    description: 'A powerful tool that generates authentic customer reviews using AI. Supports bulk processing and customization.',
    url: 'https://github.com/varuna1704/AI-customer-reviews-generator',
    liveLink: 'https://aicustomerreviewgenerator.netlify.app/',
    language: 'React',
    stars: 2,
    topics: ['AI', 'B2C', 'Reviews'],
    updatedAt: '2025-03',
    isFeatured: true,
    badge: 'Trending'
  },
  {
    id: 'feat-2',
    title: 'Precision Stock Market Analysis',
    description: 'Advanced stock market analysis tool with real-time data visualization and predictive trends.',
    url: 'https://github.com/varuna1704/Stock_Market_Analysis',
    liveLink: null,
    language: 'Python',
    stars: 1,
    topics: ['Data Science', 'Finance', 'NLP'],
    updatedAt: '2025-02',
    isFeatured: true,
    badge: 'Technical'
  },
  {
    id: 'feat-3',
    title: 'EcoFarm Management System',
    description: 'A comprehensive solution for farm management, tracking crops, resources, and sales efficiency.',
    url: 'https://github.com/varuna1704/online-system-for-farm',
    liveLink: null,
    language: 'PHP/SQL',
    stars: 1,
    topics: ['Agriculture', 'ERP', 'Dashboard'],
    updatedAt: '2024-12',
    isFeatured: true
  },
  {
    id: 'feat-4',
    title: 'Capture Studio Pro',
    description: 'Elegant photography studio booking and management platform with client galleries.',
    url: 'https://github.com/varuna1704/photo-studio',
    liveLink: null,
    language: 'JavaScript',
    stars: 0,
    topics: ['Business', 'Booking', 'Creative'],
    updatedAt: '2024-11',
    isFeatured: true
  },
  {
    id: 'feat-5',
    title: 'Gym Management Pro',
    description: 'Modern dashboard for gym owners to manage memberships, trainers, and schedules seamlessly.',
    url: 'https://github.com/varuna1704/gym_manage_system',
    liveLink: null,
    language: 'Node.js',
    stars: 1,
    topics: ['Fitness', 'Management', 'SaaS'],
    updatedAt: '2024-09',
    isFeatured: true
  }
];

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = 'varuna1704';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        const data = await response.json();

        // Filter out repos that are featured or shouldn't be shown
        const filtered = data
          .filter(repo => 
            !repo.fork && 
            repo.name.toLowerCase() !== 'varuna' && 
            !FEATURED_PROJECTS.some(f => f.title.toLowerCase().includes(repo.name.toLowerCase().replace(/-/g, ' ')))
          )
          .map(repo => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' '),
            description: repo.description || 'Professional development repository showcased for technical assessment.',
            url: repo.html_url,
            liveLink: repo.homepage || null,
            language: repo.language || 'Code',
            stars: repo.stargazers_count,
            topics: repo.topics || [],
            updatedAt: new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }),
            isFeatured: false
          }));

        setGithubProjects(filtered);
      } catch (err) {
        console.error('GitHub fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [...FEATURED_PROJECTS, ...githubProjects];

  return (
    <section className="projects-section">
      {/* Background Flow */}
      <div className="projects-bg-flow"></div>

      <div className="projects-container">
        {/* Nav Link back to Home */}
        <Link to="/" className="back-link" data-hover>
          <span>←</span> Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="projects-header">
          <div className="header-content">
            <h2 className="projects-title">
              <span className="title-text">My</span>
              <span className="title-highlight">Projects</span>
            </h2>
            <p className="projects-subtitle">
              A curated collection of my technical work, from e-commerce solutions to data analytics systems.
            </p>
          </div>
          <div className="header-line"></div>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Gathering repositories...</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="projects-grid">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.isFeatured ? 'featured' : ''}`}
                data-hover
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Flair */}
                <div className="card-accent" style={{ background: project.isFeatured ? '#ff6b35' : '#ffffff' }}></div>
                <div className="card-depth" style={{ opacity: hoveredId === project.id ? 1 : 0 }}></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Top: Badges & Info */}
                  <div className="card-header">
                    <div className="header-left">
                      <h3 className="card-title">{project.title}</h3>
                      {project.badge && <span className="featured-badge">{project.badge}</span>}
                    </div>
                    {project.language && (
                      <span className="language-badge">{project.language}</span>
                    )}
                  </div>

                  {/* Body: Description */}
                  <p className="card-description">{project.description}</p>

                  {/* Topics: Tags */}
                  {project.topics.length > 0 && (
                    <div className="card-topics">
                      {project.topics.slice(0, 4).map(topic => (
                        <span key={topic} className="topic-tag">{topic}</span>
                      ))}
                    </div>
                  )}

                  {/* Footer: Stats & Actions */}
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

                    <div className="card-actions">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                        <GitHubIcon /> Code
                      </a>
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="projects-cta">
          <div className="cta-content">
            <p className="cta-text">Interested in my approach to software development?</p>
            <div className="cta-buttons">
              <a href="https://github.com/varuna1704" target="_blank" rel="noopener noreferrer" className="cta-link primary" data-hover>
                Explore GitHub <span className="cta-arrow">→</span>
              </a>
              <Link to="/#contact" className="cta-link secondary" data-hover>
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline Icons to avoid imports
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
