import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h1>About Me</h1>
        <div className="leftContainer">
          <p>
            Hello! I`m Chen, <br />
            A 4th year BSc Software Engineer student.
            <br />
            Very passionate about programming and developing,especially web
            development and design.
            <br />
            Very eager to develop and learn new technologies. <br />
            Looking for my foothold in the programming world.
          </p>
        </div>
      </div>
      <div className="vl"></div>
      <div className="right">
        <img src="assets/Avatar.jpeg" alt="" />
      </div>
    </div>
  );
}
