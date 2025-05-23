import "./CSS File/master.css";
import "./CSS File/normalize.css";
import Header from "./components file/Header";
import Landing from "./components file/Landing";
import Me from "./components file/Me";
import Title from "./components file/Title";
import Contacts from "./components file/Contacts";
import Footer from "./components file/Footer";
import AllProjects from "./components file/AllProjects";
export default function Portfolio() {

  return (
    <>
      <Header />
      <Landing />
      <Title title={"about me"} />
      <Me />
      <Title title={"Customer Projects"} />
      <AllProjects />
      <Title title={"Contacts"} />
      <Contacts />
      <Footer />
    </>
  );
}
