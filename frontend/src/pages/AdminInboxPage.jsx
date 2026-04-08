import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLetters } from "../lib/api";

export default function AdminInboxPage() {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLetters()
      .then((data) => {
        setLetters(data);
      })
      .catch(() => {
        setError("편지 목록을 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const unreadCount = letters.filter((letter) => !letter.readStatus).length;

  return (
    <main className="admin-page-v2">
      <section className="admin-hero">
        <div className="admin-hero-bg" />
        <div className="container admin-hero-inner">
          <p className="section-kicker">Admin Inbox</p>
          <h1 className="admin-hero-title">
            Messages
            <br />
            inside the showroom.
          </h1>
          <p className="admin-hero-copy">
            방문자가 남긴 편지들이 이곳에 도착합니다.
            읽지 않은 메시지와 전체 흐름을 한눈에 볼 수 있는 관리자 편지함입니다.
          </p>

          {!loading && !error && (
            <div className="admin-stats-row">
              <div className="admin-stat-card">
                <span className="admin-stat-label">Total</span>
                <strong>{letters.length}</strong>
              </div>
              <div className="admin-stat-card">
                <span className="admin-stat-label">Unread</span>
                <strong>{unreadCount}</strong>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="admin-list-section">
        <div className="container">
          {loading && <p className="section-copy narrow">불러오는 중...</p>}
          {error && <p className="section-copy narrow">{error}</p>}

          {!loading && !error && (
            <div className="admin-inbox-grid">
              {letters.length === 0 ? (
                <div className="admin-inbox-empty">
                  <h3>아직 도착한 편지가 없습니다.</h3>
                  <p>새로운 메시지가 오면 이곳에 표시됩니다.</p>
                </div>
              ) : (
                letters.map((letter) => (
                  <Link
                    key={letter.id}
                    to={`/admin/inbox/${letter.id}`}
                    className="admin-inbox-card"
                  >
                    <div className="admin-inbox-top">
                      <span className="admin-inbox-id">
                        #{letter.id}
                      </span>

                      <span
                        className={
                          letter.readStatus
                            ? "badge-read admin-badge"
                            : "badge-unread admin-badge"
                        }
                      >
                        {letter.readStatus ? "읽음" : "안읽음"}
                      </span>
                    </div>

                    <h3>{letter.title}</h3>

                    <p className="admin-inbox-sender">
                      보낸 사람: {letter.senderName}
                    </p>

                    <p className="admin-inbox-date">
                      작성 시각: {letter.createdAt}
                    </p>

                    <div className="admin-inbox-link-row">
                      <span className="admin-inbox-link">상세 보기 →</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}