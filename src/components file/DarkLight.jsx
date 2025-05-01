export default function DarkLight(props) {
  function addDarkMod() {
    document.querySelector("body").classList.toggle("dark");
    document.querySelectorAll(".ball")[0].classList.toggle("handel-ball");
    document.querySelectorAll(".ball")[1].classList.toggle("handel-ball");
    document.querySelector("header").classList.toggle("dark");
  }
  return (
    <div onClick={addDarkMod} className="dark-mod">
      <div className="ball-container">
        <div className="ball"></div>
      </div>
    </div>
  );
}
