import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";

const featuredWorks = [
  {
    index: "01",
    title: "Ear Showroom",
    category: "Portfolio / Platform",
    description:
      "코드와 시각 경험을 한 공간에 담아내는 디지털 쇼룸. 감각적인 인터페이스와 확장 가능한 구조를 함께 설계합니다.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    index: "02",
    title: "Letter Box",
    category: "Message System",
    description:
      "방문자가 직접 메시지를 남기고, 운영자가 웹 편지함으로 읽는 조용한 커뮤니케이션 구조.",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    index: "03",
    title: "Music Archive",
    category: "Future Review Platform",
    description:
      "음악을 기록하고 별점을 남기고 감상을 공유하는 다음 단계의 플랫폼을 위한 시작점.",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function EditorialHomePage() {
  return (
    <main className="editorial-home">
      <section className="cover-hero">
        <div className="cover-hero__media">
          <img
            src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Creative studio editorial mood"
          />
        </div>

        <div className="cover-hero__overlay" />

        <div className="cover-hero__content">
          <p className="eyebrow">Editorial Portfolio / 2026</p>
          <h1>
            A showroom
            <br />
            for code,
            <br />
            music,
            <br />
            and image.
          </h1>
          <p className="cover-hero__copy">
            Teamlovers의 작업을 잡지처럼, 전시처럼, 스크롤하며 감상할 수 있는
            디지털 포트폴리오.
          </p>

          <div className="cover-hero__actions">
            <Link to="/projects" className="editorial-button editorial-button--light">
              View Archive
            </Link>
            <Link to="/letter" className="editorial-button editorial-button--ghost">
              Leave a Letter
            </Link>
          </div>
        </div>

        <div className="cover-hero__footer">
          <span>SCROLL TO ENTER</span>
        </div>
      </section>

      <RevealSection className="manifesto-section">
        <div className="editorial-grid">
          <div className="manifesto-section__left">
            <p className="eyebrow dark">Manifesto</p>
            <h2>
              Not just
              <br />
              projects.
            </h2>
          </div>

          <div className="manifesto-section__right">
            <p>
              이 사이트는 단순한 작업 목록이 아니라, 작업의 분위기와 방향까지
              함께 보여주는 매체입니다.
            </p>
            <p>
              개발, 음악, 디자인, 기록을 하나의 에디토리얼 흐름처럼 묶어
              전달합니다.
            </p>
            <p>
              정보보다 먼저 인상을 남기고, 설명보다 먼저 무드를 전달하는 것이
              이 쇼룸의 핵심입니다.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="full-bleed-image-section">
        <div className="full-bleed-image-section__inner">
          <img
            src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Editorial gallery image"
          />
          <div className="full-bleed-image-section__caption">
            <span>Visual Direction</span>
            <p>Sharp typography, quiet surfaces, cinematic spacing.</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="featured-works-section">
        <div className="editorial-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">Selected Works</p>
              <h2 className="section-heading-title">
                Featured
                <br />
                projects
              </h2>
            </div>

            <p className="section-heading-copy">
              작업들은 카드가 아니라, 각각 하나의 장면처럼 보이도록 구성합니다.
            </p>
          </div>

          <div className="featured-work-list">
            {featuredWorks.map((work) => (
              <article className="featured-work-card" key={work.index}>
                <div className="featured-work-card__image">
                  <img src={work.image} alt={work.title} />
                </div>

                <div className="featured-work-card__body">
                  <div className="featured-work-card__meta">
                    <span>{work.index}</span>
                    <span>{work.category}</span>
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section-link-row">
            <Link to="/projects" className="section-link">
              Open full archive →
            </Link>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="motion-section">
        <div className="motion-section__media">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1600"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-aerial-view-of-city-at-night-1560128214381?download=1080p"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="motion-section__overlay" />

        <div className="motion-section__content">
          <p className="eyebrow">Motion</p>
          <h2>
            Scroll like
            <br />
            reading a
            <br />
            visual magazine.
          </h2>
        </div>
      </RevealSection>

      <RevealSection className="letter-invite-section">
        <div className="editorial-container">
          <div className="letter-invite-card">
            <div>
              <p className="eyebrow dark">Letter Box</p>
              <h2 className="letter-invite-title">
                Leave a note
                <br />
                inside the showroom.
              </h2>
            </div>

            <div className="letter-invite-copy-wrap">
              <p>
                메일 대신, 이 공간 안에 직접 편지를 남길 수 있어요. 짧은 인사도,
                긴 생각도 괜찮습니다.
              </p>
              <Link to="/letter" className="section-link">
                Write a letter →
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="contact-directory-section">
        <div className="editorial-container">
          <p className="eyebrow dark">Directory</p>
          <h2 className="section-heading-title">
            Contact
            <br />
            & channels
          </h2>

          <div className="directory-grid">
            <a href="mailto:teamlovers@icloud.com" className="directory-item">
              <span>Email</span>
              <strong>teamlovers@icloud.com</strong>
            </a>

            <a
              href="https://github.com/weareteamlovers"
              target="_blank"
              rel="noopener noreferrer"
              className="directory-item"
            >
              <span>GitHub</span>
              <strong>github.com/weareteamlovers</strong>
            </a>

            <a
              href="https://www.instagram.com/ourteamlovers"
              target="_blank"
              rel="noopener noreferrer"
              className="directory-item"
            >
              <span>Instagram</span>
              <strong>@ourteamlovers</strong>
            </a>

            <a
              href="https://m.blog.naver.com/teamlovers"
              target="_blank"
              rel="noopener noreferrer"
              className="directory-item"
            >
              <span>Naver Blog</span>
              <strong>m.blog.naver.com/teamlovers</strong>
            </a>

            <a
              href="https://youtube.com/@weareteamlovers"
              target="_blank"
              rel="noopener noreferrer"
              className="directory-item"
            >
              <span>YouTube</span>
              <strong>youtube.com/@weareteamlovers</strong>
            </a>

            <a
              href="https://velog.io/@teamlovers"
              target="_blank"
              rel="noopener noreferrer"
              className="directory-item"
            >
              <span>Velog</span>
              <strong>velog.io/@teamlovers</strong>
            </a>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}