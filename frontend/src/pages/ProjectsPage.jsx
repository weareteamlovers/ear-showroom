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
    <main className="page-shell">
      <div className="container">
        <p className="section-kicker">Projects</p>
        <h1 className="page-title">Projects</h1>

        {loading && <p className="section-copy narrow">불러오는 중...</p>}
        {error && <p className="section-copy narrow">{error}</p>}

        {!loading && !error && (
          <div className="project-grid">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <h3>{project.name}</h3>
                <p>{project.description || "설명이 아직 없습니다."}</p>
                <div className="project-meta">
                  <span>{project.language || "Unknown"}</span>
                  <span>★ {project.stargazersCount}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}