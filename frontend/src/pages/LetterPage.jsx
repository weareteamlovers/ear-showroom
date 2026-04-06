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
    <main className="page-shell">
      <div className="container">
        <p className="section-kicker">Letter Box</p>
        <h1 className="page-title">Write a Letter</h1>
        <p className="section-copy narrow">
          메일 대신 이곳에 직접 편지를 남길 수 있어요.
        </p>

        {done && <div className="success-box">편지가 전송되었어요.</div>}
        {error && <div className="error-box">{error}</div>}

        <form className="letter-form" onSubmit={onSubmit}>
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
    </main>
  );
}