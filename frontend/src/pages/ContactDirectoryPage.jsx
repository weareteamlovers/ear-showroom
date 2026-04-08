export default function ContactPage() {
  const links = [
    {
      label: "Email",
      value: "teamlovers@icloud.com",
      href: "mailto:teamlovers@icloud.com",
      external: false,
      description: "가장 직접적인 연락 방법입니다.",
    },
    {
      label: "GitHub",
      value: "github.com/weareteamlovers",
      href: "https://github.com/weareteamlovers",
      external: true,
      description: "프로젝트와 코드 작업물을 확인할 수 있습니다.",
    },
    {
      label: "Instagram",
      value: "@ourteamlovers",
      href: "https://www.instagram.com/ourteamlovers",
      external: true,
      description: "팀사랑꾼들의 감각과 일상을 담는 공간.",
    },
    {
      label: "Naver Blog",
      value: "m.blog.naver.com/teamlovers",
      href: "https://m.blog.naver.com/teamlovers",
      external: true,
      description: "기록과 생각이 쌓이는 블로그.",
    },
    {
      label: "YouTube",
      value: "youtube.com/@weareteamlovers",
      href: "https://youtube.com/@weareteamlovers",
      external: true,
      description: "영상과 음악, 그리고 앞으로의 작업들.",
    },
    {
      label: "Velog",
      value: "velog.io/@teamlovers",
      href: "https://velog.io/@teamlovers",
      external: true,
      description: "개발 관련 기록과 학습 아카이브.",
    },
  ];

  return (
    <main className="contact-page-v2">
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="container contact-hero-inner">
          <p className="section-kicker">Connect</p>
          <h1 className="contact-hero-title">
            Reach Teamlovers
            <br />
            in every direction.
          </h1>
          <p className="contact-hero-copy">
            메일, 소셜, 블로그, 개발 기록까지.
            Teamlovers가 머무는 온라인 공간들을 한곳에 모았습니다.
          </p>
        </div>
      </section>

      <section className="contact-links-section">
        <div className="container">
          <div className="contact-links-grid">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-link-card"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <div className="contact-link-top">
                  <span className="contact-link-label">{item.label}</span>
                  <span className="contact-link-arrow">↗</span>
                </div>

                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}