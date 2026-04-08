import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchLetterDetail } from "../lib/api";

export default function AdminLetterDetailPage() {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLetterDetail(id)
      .then((data) => {
        setLetter(data);
      })
      .catch(() => {
        setError("편지 상세를 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <main className="admin-detail-page-v2">
      <section className="admin-detail-section">
        <div className="container">
          <div className="detail-back-row">
            <Link to="/admin/inbox" className="back-link">
              ← Inbox로 돌아가기
            </Link>
          </div>

          {loading && <p className="section-copy narrow">불러오는 중...</p>}
          {error && <p className="section-copy narrow">{error}</p>}

          {!loading && !error && letter && (
            <article className="admin-detail-card">
              <div className="admin-detail-top">
                <div>
                  <p className="section-kicker">Letter Detail</p>
                  <h1 className="admin-detail-title">{letter.title}</h1>
                </div>

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

              <div className="admin-detail-meta-grid">
                <div className="admin-detail-meta-card">
                  <span className="admin-detail-meta-label">From</span>
                  <strong>{letter.senderName}</strong>
                </div>

                <div className="admin-detail-meta-card">
                  <span className="admin-detail-meta-label">Created At</span>
                  <strong>{letter.createdAt}</strong>
                </div>
              </div>

              <hr className="detail-divider" />

              <div className="admin-detail-content">
                {letter.content}
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}