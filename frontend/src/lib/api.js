const API_BASE = "/api";

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  if (!res.ok) throw new Error("프로젝트를 불러오지 못했습니다.");
  return res.json();
}

export async function submitLetter(payload) {
  const res = await fetch(`${API_BASE}/letters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`편지 전송 실패 (${res.status}): ${text}`);
  }

  return text;
}

export async function fetchLetters() {
  const res = await fetch(`${API_BASE}/admin/letters`);
  if (!res.ok) throw new Error("편지 목록을 불러오지 못했습니다.");
  return res.json();
}

export async function fetchLetterDetail(id) {
  const res = await fetch(`${API_BASE}/admin/letters/${id}`);
  if (!res.ok) throw new Error("편지 상세를 불러오지 못했습니다.");
  return res.json();
}