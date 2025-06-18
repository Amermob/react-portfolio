import DarkLight from "./DarkLight";
import { useRef } from "react";

export default function Header() {
  const scrollUp = useRef();
  const sideBarRef = useRef();
  const hideSidebarRef = useRef();

  window.onscroll = () => {
    if (scrollY >= 1000) {
      scrollUp.current.style.display = "block";
    } else {
      scrollUp.current.style.display = "none";
    }
  };

  function sidebar() {
    sideBarRef.current.style.display = "flex";
    hideSidebarRef.current.style.display = "none";
  }

  function hideSidebar() {
    sideBarRef.current.style.display = "none";
    hideSidebarRef.current.style.display = "flex";
  }

  return (
    <>
      <i
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        ref={scrollUp}
        class="scrollUp fa-solid fa-arrow-up"
      ></i>
      <div id="home"></div>
      <header>
        <a className="logo" href="#home">
          AM
        </a>
        <nav ref={hideSidebarRef} className="option">
          <ul>
            <li className="hide-on-mobile">
              <a href="#me">Me</a>
            </li>
            <li className="hide-on-mobile">
              <a href="#projects">Project</a>
            </li>
            <li className="hide-on-mobile">
              <a href="#contacts">Contacts</a>
            </li>
            <div className="hide-on-mobile">
              <DarkLight />
            </div>
            <li className="show-in-mobile">
              <a>
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
        <nav ref={sideBarRef} className="sidebar">
          <ul>
            <li>
              <a>
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
              <a href="#me">Me</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
            <DarkLight />
          </ul>
        </nav>
      </header>
    </>
  );
}
