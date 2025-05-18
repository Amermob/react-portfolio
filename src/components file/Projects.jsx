export default function Projects(props) {
  return (
    <>
      <div className="project">
        <h2>{props.title}</h2>
        <img src={props.img} alt={props.alt} />
        <div className="text-section">
          <a target="_blank" href={props.link}>
            Live Demo
          </a>
          <a target="_blank" href={props.code}>
            Source Code
          </a>
        </div>
        <div className="skills">
          <img src={props.html} alt="HTML" />
          <img src={props.css} alt="CSS" />
          <img src={props.js} alt="JS" />
          {props.react && <img src={props.react} alt="React" />}
        </div>
      </div>
    </>
  );
}
