export default function ProjectCard({ project }) {
  return (
    <div className="card project">
      <div className="top">
        <div>
          <h3 className="p-title">{project.title}</h3>
          <p className="p-desc">{project.description}</p>
        </div>
        {project.link ? (
          <a className="pill" href={project.link} target="_blank" rel="noreferrer">
            Live
          </a>
        ) : (
          <span className="pill" style={{ opacity: 0.6 }}>WIP</span>
        )}
      </div>

      <div className="badges">
        {project.tags.map((t) => (
          <span className="badge" key={t}>{t}</span>
        ))}
      </div>

      <div className="small">
        <span style={{ color: "rgba(255,255,255,.8)" }}>Stack:</span> {project.stack}
      </div>
    </div>
  );
}
