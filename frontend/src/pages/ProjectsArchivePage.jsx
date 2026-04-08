import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/api";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch(() => {
        setError("프로젝트를 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="projects-page-v2">
      <section className="projects-hero">
        <div className="projects-hero-bg" />
        <div className="container projects-hero-inner">
          <p className="section-kicker">Selected Works</p>
          <h1 className="projects-hero-title">
            Projects
            <br />
            that carry
            <br />
            my direction.
          </h1>
          <p className="projects-hero-copy">
            GitHub에 기록된 작업들 중, 지금의 Teamlovers를 가장 잘 보여주는
            프로젝트들입니다. 기능만이 아니라 구조와 감각까지 함께 담고 있습니다.
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          {loading && <p className="section-copy narrow">불러오는 중...</p>}
          {error && <p className="section-copy narrow">{error}</p>}

          {!loading && !error && (
            <div className="projects-showcase-grid">
              {projects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-showcase-card"
                >
                  <div className="projects-card-top">
                    <span className="projects-card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="projects-card-language">
                      {project.language || "Unknown"}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>
                    {project.description || "설명이 아직 없습니다."}
                  </p>

                  <div className="projects-card-bottom">
                    <span className="projects-card-link">Open on GitHub</span>
                    <span className="projects-card-stars">★ {project.stargazersCount}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}