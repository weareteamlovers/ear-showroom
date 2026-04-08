import { useState } from "react";
import { submitLetter } from "../lib/api";

export default function LetterPage() {
  const [form, setForm] = useState({
    senderName: "",
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function onChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    setError("");

    try {
      await submitLetter(form);
      setDone(true);
      setForm({
        senderName: "",
        title: "",
        content: "",
      });
    } catch (err) {
      setError(err.message || "편지 전송에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="letter-page-v2">
      <section className="letter-hero">
        <div className="letter-hero-bg" />
        <div className="container letter-hero-inner">
          <p className="section-kicker">Letter Box</p>
          <h1 className="letter-hero-title">
            Leave a message
            <br />
            that stays here.
          </h1>
          <p className="letter-hero-copy">
            메일 대신, 이 공간 안에 직접 편지를 남길 수 있어요.
            짧은 인사도 좋고, 긴 이야기여도 괜찮습니다.
          </p>
        </div>
      </section>

      <section className="letter-form-section">
        <div className="container letter-layout">
          <div className="letter-side-note">
            <div className="letter-note-card">
              <span className="mini-label">How it works</span>
              <h3>Write directly to the showroom.</h3>
              <p>
                이 편지는 사이트 안의 편지함으로 전달됩니다.
                방문자의 말이 이 공간 안에 차곡차곡 쌓이도록 설계되어 있어요.
              </p>
            </div>
          </div>

          <div className="letter-form-card">
            {done && <div className="success-box">편지가 전송되었어요.</div>}
            {error && <div className="error-box">{error}</div>}

            <form className="letter-form letter-form-v2" onSubmit={onSubmit}>
              <label>이름</label>
              <input
                type="text"
                name="senderName"
                value={form.senderName}
                onChange={onChange}
                placeholder="닉네임 또는 이름"
                required
              />

              <label>제목</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={onChange}
                placeholder="편지 제목"
                required
              />

              <label>내용</label>
              <textarea
                name="content"
                value={form.content}
                onChange={onChange}
                placeholder="하고 싶은 말을 남겨주세요."
                rows="12"
                required
              />

              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? "전송 중..." : "편지 보내기"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}