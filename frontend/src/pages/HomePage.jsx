import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="page-shell hero-shell">
      <div className="container">
        <p className="section-kicker">AI MUSIC DESIGN AND LOVE</p>
        <h1 className="hero-title">
          Teamlovers
          <br />
          Showroom
        </h1>
        <p className="section-copy narrow">
          프로젝트, 디자인, 그리고 편지가 머무는 공간.
          React 프론트엔드와 Spring Boot 백엔드로 구성된 디지털 쇼룸.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">프로젝트 보기</Link>
          <Link to="/letter" className="btn btn-secondary">편지 쓰기</Link>
        </div>
      </div>
    </main>
  );
}