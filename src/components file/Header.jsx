import DarkLight from "./DarkLight";

export default function Header() {
  function sidebar() {
    document.querySelector(".sidebar").style.display = "flex";
    document.querySelector(".option").style.display = "none";
  }

  function hideSidebar() {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".option").style.display = "flex";
  }

  function scrollIntoElements(e) {
  console.log(e.target)
  }
  return (
    <header id="home">
      <a className="logo" onClick={scrollIntoElements}>
        AM
      </a>
      <nav className="option">
        <ul>
          <li className="hide-on-mobile">
            <a onClick={scrollIntoElements}>Me</a>
          </li>
          <li className="hide-on-mobile">
            <a>Project</a>
          </li>
          <li className="hide-on-mobile">
            <a onClick={scrollIntoElements}>Contacts</a>
          </li>
          <div className="hide-on-mobile">
            <DarkLight />
          </div>
          <li className="show-in-mobile">
            <a href="#">
              <svg
                onClick={sidebar}
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#e3e3e3"
              >
                <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="sidebar">
        <ul>
          <li>
            <a href="#">
              <svg
                onClick={hideSidebar}
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#e3e3e3"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li>
            <a onClick={scrollIntoElements}>Me</a>
          </li>
          <li>
            <a onClick={scrollIntoElements}>Project</a>
          </li>
          <li>
            <a onClick={scrollIntoElements}>Contacts</a>
          </li>
          <DarkLight />
        </ul>
      </nav>
    </header>
  );
}
