export default function Projects(props) {

  return (
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
    </div>
  );
}
