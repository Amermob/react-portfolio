export default function Contacts() {
  function handleForm(formData) {
    const name = formData.get("name");
    const email = formData.get("e-mail");
    const textarea = formData.get("info");
  }

  return (
    <div className="container">
      <div id="contacts" className="contacts">
        <div className="info-section">
          <h2>Hit Me Up:</h2>
          <a
            target="_blank"
            className="github"
            href="https://github.com/Amermob"
          >
            <img src="imgs/GitHub.png" alt="github logo" />
          </a>
          <a
            target="_blank"
            className="github"
            href="https://www.linkedin.com/in/amer-uthman/"
          >
            <img src="imgs/linkedin.png" alt="linkedin logo" />
          </a>

          <p>E-mail: amermob5@gmail.com</p>
          <p>Location: Saudi Arabia , Riyadh</p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1JRXNsgQj6lVhPUrKxZqc05K2Cfkq4Jdw/view?usp=sharing"
          >
            View Resume
          </a>
        </div>
        <form
          target="_blank"
          action="https://formspree.io/f/mknegpzg"
          method="POST"
        >
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="email">E-mail</label>
          <input id="email" name="e-mail" type="email" />
          <label htmlFor="info" name="info">
            message:
          </label>
          <textarea name="info" id="info"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
