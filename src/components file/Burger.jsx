export default function Burger() {
  function burgerMenu() {
    document.querySelector("nav").

  return (
    <svg
      onClick={burgerMenu}
      className="burger"
      width="64px"
      height="64px"
      viewBox="-4.8 -4.8 33.60 33.60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
      stroke="#fff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
          fill=""
        ></path>{" "}
        <path
          d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
          fill=""
        ></path>{" "}
        <path
          d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
          fill=""
        ></path>{" "}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#fff"
          strokeWidth="0.4800000000000001"
        ></circle>{" "}
      </g>
    </svg>
  );
}
