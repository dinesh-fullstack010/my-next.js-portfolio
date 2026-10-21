"use client";
import { useState } from "react";
import { projects, profile } from "../data/portfolio";
import Motion from "./Motion";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";
const REACT_URL =
  "https://dinesh-fullstack010.github.io/my-react-portfolio/";
const story =
  "I started by testing the details. Then I wanted to understand the bigger picture. Today, I connect the interface, the backend, and everything in between.";
export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Motion />
      <div className="reading-progress" aria-hidden="true" />
      <a href="#work" className="skip">
        Skip to selected work
      </a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Dinesh home">
          dinesh<span>•</span>
        </a>
        <nav className={menu ? "nav open" : "nav"}>
          {[
            ["Work", "work"],
            ["Story", "story"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="edition-link" href={REACT_URL}>
          React.js edition <span>↗</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
          aria-expanded={menu}
        >
          {menu ? "Close" : "Menu"} <span>{menu ? "−" : "+"}</span>
        </button>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-kicker">
            <span>
              <i /> AVAILABLE FOR NEW OPPORTUNITIES
            </span>
            <span>CHENNAI, INDIA · NEXT.JS EDITION</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                DINESH SENTHIL KUMAR / SOFTWARE ENGINEER
              </p>
              <h1>
                <span>One engineer.</span>
                <span>Many moving</span>
                <span className="outline-word">
                  parts<span className="period">.</span>
                </span>
              </h1>
              <p className="hero-description">
                Web interfaces. Backend systems. Mobile experiences.
                <br />I bring the pieces together—and see them through.
              </p>
              <a className="button blue" href="#work">
                Take a look around <span>↓</span>
              </a>
            </div>
            <div className="hero-art">
              <div className="portrait-orbit">
                <div className="orbit-grid" />
                <img
                  src={profile.portrait}
                  alt="Dinesh Senthil Kumar"
                  fetchPriority="high"
                />
                <span className="orbit-tag">THE HUMAN BEHIND THE CODE</span>
              </div>
              <div className="note-card">
                <span>A LITTLE ABOUT ME</span>
                <b>
                  Curiosity
                  <br />
                  comes standard.
                </b>
                <span className="hand-arrow">↗</span>
              </div>
              <div className="experience-badge">
                <strong>3</strong>
                <span>
                  YEARS OF
                  <br />
                  HANDS-ON WORK
                </span>
              </div>
              <svg
                className="rotating-seal"
                viewBox="0 0 120 120"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circle-path"
                    d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                  />
                </defs>
                <text>
                  <textPath href="#circle-path">
                    SCROLL TO EXPLORE • SCROLL TO EXPLORE •{" "}
                  </textPath>
                </text>
                <path
                  d="M60 38V80M45 65L60 80L75 65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="hero-bottom">
            <span>FULL STACK, FULL PICTURE.</span>
            <div>
              <b>React</b>
              <b>Node.js</b>
              <b>React Native</b>
              <b>MongoDB</b>
              <b>Azure</b>
            </div>
            <span className="small-plus">✳</span>
          </div>
        </section>
        <section id="work" className="work-section">
          <div className="section-intro">
            <span className="index-label">01 — SELECTED WORK</span>
            <div>
              <h2 className="mask-reveal">
                Built for people.
                <br />
                <em>Backed by care.</em>
              </h2>
              <p>
                Six projects I’ve contributed to at APSI Technologies.
                <br />
                Different challenges, one connected approach.
              </p>
            </div>
            <span className="section-count">(06)</span>
          </div>
          <div className="project-stack">
            {projects.map((p, i) => (
              <article
                className="project-chapter"
                key={p.name}
                style={{ "--chapter": i }}
              >
                <div className="project-content">
                  <div className="chapter-top">
                    <span>{p.num} / 06</span>
                    <span>{p.type}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project-line">{p.desc}</p>
                  <p className="project-description">{p.detail}</p>
                  <div className="tech-tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <details>
                    <summary>
                      What I contributed <span>+</span>
                    </summary>
                    <ul>
                      {p.work.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </details>
                </div>
                <ProjectVisual kind={p.art} number={p.num} />
              </article>
            ))}
          </div>
        </section>
        <section id="story" className="story-section">
          <div className="story-top">
            <span className="index-label">02 — THE PERSON, TOO</span>
            <p className="story-text" aria-label={story}>
              {story.split(" ").map((word, i) => (
                <span className="story-word" key={i} aria-hidden="true">
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="story-grid">
            <figure className="outdoor-photo mask-reveal">
              <img
                src={`${import.meta.env.BASE_URL}dinesh-outdoors.jpeg`} 
                alt="Dinesh outdoors in a field with mountains behind him"
                loading="lazy"
              />
              <figcaption>
                A little perspective, beyond the screen. <span>↗</span>
              </figcaption>
            </figure>
            <div className="story-details">
              <span className="little-star">✳</span>
              <h3>
                Always looking
                <br />
                one layer deeper.
              </h3>
              <p>
                My journey began with Jest automation testing. Working with
                Node.js led me to the interfaces those APIs powered, and then
                into React and React Native.
              </p>
              <p>
                Today, I work across full-stack development, real-time
                communication, payments, mobile features, and cloud deployments.
                I also troubleshoot production issues—following a problem until
                I understand what’s really happening.
              </p>
              <div className="story-facts">
                <div>
                  <strong>Web + mobile</strong>
                  <span>Connected experiences</span>
                </div>
                <div>
                  <strong>End to end</strong>
                  <span>Development to production</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="experience-section">
          <div className="section-intro">
            <span className="index-label">03 — EXPERIENCE</span>
            <h2 className="mask-reveal">
              Less theory.
              <br />
              <em>More doing.</em>
            </h2>
          </div>
          <div className="experience-row">
            <span className="date">SEP 2023 — PRESENT</span>
            <div>
              <h3>Software Engineer</h3>
              <p className="employer">
                APSI Technologies Private Limited · Chennai
              </p>
              <p>
                Full-stack web and mobile features, REST APIs, JWT
                authentication, MongoDB integrations, automated testing, and
                production support.
              </p>
              <p>
                Razorpay subscriptions, WebSockets, SSE, MQTT, GPS tracking, and
                Azure DevOps deployment workflows.
              </p>
            </div>
            <span className="experience-icon">↗</span>
          </div>
          <div className="experience-row education">
            <span className="date">2023 / EDUCATION</span>
            <div>
              <h3>Bachelor of Computer Applications</h3>
              <p>
                Prince Shri Venkateshwara Arts and Science College
                <br />
                University of Madras
              </p>
            </div>
            <span className="experience-icon">↗</span>
          </div>
          <div className="toolkit-grid">
            {[
              [
                "01",
                "Interface",
                "React · Next.js · React Native · TypeScript · Redux",
              ],
              ["02", "Systems", "Node.js · Express · MongoDB · Mongoose · SQL"],
              ["03", "Delivery", "Jest · Postman · Git · Azure · Azure DevOps"],
              [
                "04",
                "Connections",
                "WebSockets · SSE · MQTT · Razorpay · Three.js",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-header">
            <span className="index-label">04 — START A CONVERSATION</span>
            <h2 className="mask-reveal">
              Good work starts
              <br />
              with a <em>hello.</em>
              <span className="contact-star">✳</span>
            </h2>
            <p>Have a role or a project in mind? I’d like to hear about it.</p>
          </div>
          <div className="contact-layout">
            <aside>
              <h3>Let’s connect the dots.</h3>
              <p>
                I’m exploring opportunities in full-stack, backend, and mobile
                development.
              </p>
              <a href={"mailto:" + profile.email}>{profile.email} ↗</a>
              <span>Based in Chennai, India</span>
              <div className="contact-doodle" aria-hidden="true">
                ↳
              </div>
            </aside>
            <ContactForm />
          </div>
        </section>
        <section className="other-editions">
          <span>ONE PERSON. A FEW DIFFERENT PERSPECTIVES.</span>
          <div>
            <a href={REACT_URL}>
              React.js <b>↗</b>
            </a>
            <span className="current-edition">
              Next.js <small>YOU ARE HERE</small>
            </span>
            <span className="future-edition">
              Angular <small>COMING SOON</small>
            </span>
          </div>
        </section>
      </main>
      <footer>
        <a href="#top" className="wordmark">
          dinesh<span>•</span>
        </a>
        <span>© {new Date().getFullYear()} Dinesh Senthil Kumar</span>
        <a href="#top">Back to the top ↑</a>
      </footer>
    </>
  );
}
