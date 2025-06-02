import Projects from "./Projects";

export default function AllProjects() {
  const paidProjects = [
    {
      id: 1,
      title: "Sombrero Coffee Shop",
      img: "imgs/paid-projects/sombrero.png",
      alt: "sombrero website image",
      code: "https://github.com/Amermob/Sombrero-Coffee-Shop",
      link: "https://amermob.github.io/Sombrero-Coffee-Shop/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 2,
      title: "Sabahat Al Eid",
      img: "imgs/paid-projects/sabahat al eid.png",
      alt: "Sabahat al Eid Website image",
      code: "https://github.com/Amermob/Sabahat-al-Eid",
      link: "https://amermob.github.io/Sabahat-al-Eid/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 3,
      title: "Blue Arrow For Events",
      img: "imgs/paid-projects/blue-arrow.png",
      alt: "Blue Arrow Website image",
      code: "https://github.com/Amermob/blues",
      link: "https://amermob.github.io/blues/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
      react: "imgs/react.png",
    },
  ];
  const paidProjectsList = paidProjects.map((project) => {
    console.log(project.tech);
    return (
      <Projects
        {...project}
      />
    );
  });

  const learningProjects = [
    {
      id: 1,
      title: "Generate a Password",
      img: "imgs/learning-projects/password-generator.png",
      alt: "Generate a Random Password",
      code: "https://github.com/Amermob/Generate-a-random-password",
      link: "https://amermob.github.io/Generate-a-random-password/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 2,
      title: "Memes Generator",
      img: "imgs/learning-projects/meme-generator.png",
      alt: "Memes Generator Website image",
      code: "https://github.com/Amermob/meme-generator",
      link: "https://amermob.github.io/meme-generator/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
      react: "imgs/react.png",
    },
    {
      id: 3,
      title: "Dragon Ball Character",
      img: "imgs/learning-projects/dragon-ball-characters-with-api.png",
      alt: "Dragon Ball Character Website image",
      code: "https://github.com/Amermob/dragon-ball-character",
      link: "https://amermob.github.io/dragon-ball-character/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
      react: "imgs/react.png",
    },
    {
      id: 4,
      title: "Grocery List",
      img: "imgs/learning-projects/list.png",
      alt: "Grocery List Website image",
      code: "https://github.com/Amermob/grocery-list",
      link: "https://amermob.github.io/grocery-list/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 5,
      title: "Click To Scroll",
      img: "imgs/learning-projects/scroll-on-nav.png",
      alt: "Click To Scroll Website image",
      code: "https://github.com/Amermob/navigation-bar-on-scroll",
      link: "https://amermob.github.io/navigation-bar-on-scroll/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 6,
      title: "Image Slider",
      img: "imgs/learning-projects/image-slider.png",
      alt: "Image Slider Website image",
      code: "https://github.com/Amermob/slider",
      link: "https://amermob.github.io/slider/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 7,
      title: "Countdown",
      img: "imgs/learning-projects/countdown.png",
      alt: "Countdown Website image",
      code: "https://github.com/Amermob/countdown",
      link: "https://amermob.github.io/countdown/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 8,
      title: "Background Video",
      img: "imgs/learning-projects/background-video.png",
      alt: "background-video-player Website image",
      code: "https://github.com/Amermob/background-video-player",
      link: "https://amermob.github.io/background-video-player/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 9,
      title: "Menu",
      img: "imgs/learning-projects/menu.png",
      alt: "Menu Website image",
      code: "https://github.com/Amermob/menu",
      link: "https://amermob.github.io/menu/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 10,
      title: "FAQ",
      img: "imgs/learning-projects/faq.png",
      alt: "FAQ Website image",
      code: "https://github.com/Amermob/faq",
      link: "https://amermob.github.io/faq/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 11,
      title: "Product Info",
      img: "imgs/learning-projects/product-info.png",
      alt: "Product Info Website image",
      code: "https://github.com/Amermob/product-info",
      link: "https://amermob.github.io/product-info/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 12,
      title: "Color Flipper",
      img: "imgs/learning-projects/color.png",
      alt: "Color Flipper Website image",
      code: "https://github.com/Amermob/color-flipper",
      link: "https://amermob.github.io/color-flipper/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 13,
      title: "Counter",
      img: "imgs/learning-projects/counter.png",
      alt: "Counter Website image",
      code: "https://github.com/Amermob/counter",
      link: "https://amermob.github.io/counter/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 14,
      title: "Calculator",
      img: "imgs/learning-projects/calculator.png",
      alt: "Calculator Website image",
      code: "https://github.com/Amermob/calculator",
      link: "https://amermob.github.io/calculator/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 15,
      title: "Testimonail Slider",
      img: "imgs/learning-projects/test.png",
      alt: "Testimonail-slider Website image",
      code: "https://github.com/Amermob/Testimonail-slider",
      link: "https://amermob.github.io/Testimonail-slider/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 16,
      title: "GitHub User Repos",
      img: "imgs/learning-projects/repos.png",
      alt: "GitHub User Repos Website image",
      code: "https://github.com/Amermob/get-user-repositories",
      link: "https://amermob.github.io/get-user-repositories/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 17,
      title: "Unit Conversion",
      img: "imgs/learning-projects/calc-unit.png",
      alt: "Metric/Imperial Unit Conversion Website image",
      code: "https://github.com/Amermob/Metric-Imperial-Unit-Conversion",
      link: "https://amermob.github.io/Metric-Imperial-Unit-Conversion/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
    {
      id: 18,
      title: "Pepe the Frog Mood",
      img: "imgs/learning-projects/pepe-the-frog.png",
      alt: "Pepe the Frog Website image",
      code: "https://github.com/Amermob/pepe-the-frog",
      link: "https://amermob.github.io/pepe-the-frog/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
       {
      id: 19,
      title: "Twitter Clone for Cats",
      img: "imgs/learning-projects/twitter-clone-for-cats.png",
      alt: "PTwitter Clone for Cats Website image",
      code: "https://github.com/Amermob/twitter-clone-for-cat",
      link: "https://amermob.github.io/twitter-clone-for-cat/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
        {
      id: 20,
      title: "Color Scheme with API",
      img: "imgs/learning-projects/color-cheme-with-api.png",
      alt: "Color Scheme with API Website image",
      code: "https://github.com/Amermob/color-scheme-using-api",
      link: "https://amermob.github.io/color-scheme-using-api/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
        {
      id: 21,
      title: "Card Game using with API",
      img: "imgs/learning-projects/card-game.png",
      alt: "Card Game using with API Website image",
      code: "https://github.com/Amermob/game-card",
      link: "https://amermob.github.io/game-card/",
      html: "imgs/HTML.png",
      css: "imgs/CSS.png",
      js: "imgs/JS.png",
    },
  ];
  const learningProjectsList = learningProjects.map((project) => {
    return (
      <Projects
        key={project.id}
        title={project.title}
        img={project.img}
        alt={project.alt}
        code={project.code}
        link={project.link}
        tech={project.tech}
        html={project.html}
        css={project.css}
        js={project.js}
        react={project.react}
      />
    );
  });
  return (
    <div className="container">
      <h3>*Paid Projects*</h3>
      <div id="projects" className="projects">
        {paidProjectsList}
      </div>
      <hr></hr>
      <h3>*Project-Based Learning*</h3>
      <div id="projects" className="projects">
        {learningProjectsList}
      </div>
    </div>
  );
}
