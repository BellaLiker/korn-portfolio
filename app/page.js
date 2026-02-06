import "./globals.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "ShopEasy — E-commerce POS",
    description: "Product list, cart, wishlist, checkout, admin dashboard, role-based access control.",
    tags: ["React", "Node.js", "MySQL"],
    stack: "React + Ant Design, Node.js (Express), MySQL",
    link: "",
  },
  {
    title: "Admin Dashboard",
    description: "Revenue chart, recent orders, top categories, export to Excel, print invoice.",
    tags: ["Recharts", "AntD", "API"],
    stack: "React + Ant Design + Recharts, REST APIs",
    link: "",
  },
  {
    title: "Movie App (Full-stack)",
    description: "Modern UI + CRUD movies, auth, search, pagination, admin management.",
    tags: ["React", "Node.js", "UI/UX"],
    stack: "React, Node.js, MySQL (or MongoDB)",
    link: "",
  },
];

const skills = [
  "React.js / Next.js",
  "Node.js (Express)",
  "MySQL / SQL",
  "REST API design",
  "Ant Design UI",
  "Auth (JWT) & RBAC",
  "Deployment (Vercel)",
];

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <span className="dot" />
            <span>Korn Phanna</span>
          </div>
          <nav className="nav-links">
            <a className="pill" href="#projects">Projects</a>
            <a className="pill" href="#skills">Skills</a>
            <a className="pill" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <h1 className="h1">
              Full‑stack Developer
              <br />
              building clean web apps.
            </h1>
            <p className="lead">
              I build modern web applications with <b>React</b> and <b>Node.js</b>.
              I focus on clean UI, solid APIs, and practical features that match real business needs.
            </p>

            <div className="hero-cta">
              <a className="btn primary" href="#projects">See Projects</a>
              <a className="btn" href="#contact">Contact Me</a>
              <a className="btn" href="/KornPhanna-CV.pdf" target="_blank" rel="noreferrer">
                Download CV (optional)
              </a>
            </div>

            <p className="small" style={{ marginTop: 14 }}>
              Tip: Replace the CV link by putting your PDF in <code>/public</code> named <code>KornPhanna-CV.pdf</code>.
            </p>
          </div>

          <aside className="card kv">
            <div className="row">
              <div className="k">Location</div>
              <div className="v">Cambodia</div>
            </div>
            <div className="row">
              <div className="k">Main stack</div>
              <div className="v">React, Node.js, MySQL</div>
            </div>
            <div className="row">
              <div className="k">Experience</div>
              <div className="v">E-commerce & Admin systems</div>
            </div>
            <div className="row">
              <div className="k">Availability</div>
              <div className="v">Open to work</div>
            </div>
          </aside>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid">
            {skills.map((s) => (
              <div className="card" key={s}>
                <div style={{ fontWeight: 600 }}>{s}</div>
                <div className="small" style={{ marginTop: 6 }}>
                  {s.includes("Auth") ? "JWT, middleware, role guards" :
                   s.includes("Deployment") ? "Vercel, env vars, builds" :
                   s.includes("MySQL") ? "schema design, joins, indexes" :
                   "production-focused implementation"}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p className="lead" style={{ marginBottom: 10 }}>
              Want to work together? Reach out:
            </p>
            <div className="badges">
              <a className="pill" href="mailto:phanna069@gmail.com">phanna069@gmail.com</a>
              <a className="pill" href="https://github.com/your-username" target="_blank" rel="noreferrer">bellaliker</a>
              <a className="pill" href="https://www.linkedin.com/in/your-username" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <p className="small" style={{ marginTop: 10 }}>
              Customize the links in <code>app/page.js</code>.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Korn Phanna</div>
          <div>
            Built with Next.js • <a href="#top">Back to top</a>
          </div>
        </footer>
      </main>
    </>
  );
}
