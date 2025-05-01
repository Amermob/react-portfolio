export default function Contacts() {
  function handleForm(formData) {
    const name = formData.get("name");
    const email = formData.get("e-mail");
    const textarea = formData.get("info");
    console.log(name);
    console.log(email);
    console.log(textarea);
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
          <p>E-mail: amermob5@gmail.com</p>
          <p>Location: Riyadh, Al Jiradiyah</p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/19w-KFnNqDiSj6NYkydkchBDr71mY55qd/view?usp=sharing"
          >
            View Resume
          </a>
        </div>
        <form action={handleForm}>
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
