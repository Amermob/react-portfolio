import "./CSS File/master.css";
import "./CSS File/normalize.css";
import Header from "./components file/Header";
import Landing from "./components file/Landing";
import Me from "./components file/Me";
import Projects from "./components file/Projects";
import Title from "./components file/Title";
import Contacts from "./components file/Contacts";
import Footer from "./components file/Footer";
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Sombrero Coffee Shop",
      img: "/imgs/sombrero.png",
      alt: "sombrero website image",
      code: "https://github.com/Amermob/Sombrero-Coffee-Shop",
      link: "https://amermob.github.io/Sombrero-Coffee-Shop/",
    },
    {
      id: 2,
      title: "Sabahat Al Eid",
      img: "/imgs/sabahat al eid.png",
      alt: "Sabahat al Eid Website image",
      code: "https://github.com/Amermob/Sabahat-al-Eid",
      link: "https://amermob.github.io/Sabahat-al-Eid/",
    },
  ];
  const projectsList = projects.map((project) => {
    return (
      <Projects
        key={project.id}
        title={project.title}
        img={project.img}
        alt={project.alt}
        code={project.code}
        link={project.link}
      />
    );
  });

  return (
    <>
      <Header />
      <Landing />
      <Title title={"about me"} />
      <Me />
      <Title title={"projects"} />
      <div className="container">
        <div id="projects" className="projects">
          {projectsList}
        </div>
      </div>
      <Title title={"Contacts"} />
      <Contacts />
      <Footer />
    </>
  );
}
