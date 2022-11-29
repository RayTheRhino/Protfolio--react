import "./Skills.scss";

export default function Protfolio() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/html-5.png"
              alt="html icon img"
              className="skill-icon"
            />
            <h3>Html</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/css-3.png"
              alt="css icon img"
              className="skill-icon"
            />
            <h3>Css</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img src="assets/js.png" alt="" className="skill-icon" />
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/structure.png"
              alt="react icon img"
              className="skill-icon"
            />
            <h3>React</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/node.png"
              alt="node icon img"
              className="skill-icon"
            />
            <h3>NodeJs</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/mongo.png"
              alt="mongo icon img"
              className="skill-icon"
            />
            <h3>MongoDB</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/github.png"
              alt="github icon img"
              className="skill-icon"
            />
            <h3>GitHub</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/java.png"
              alt="java icon img"
              className="skill-icon"
            />
            <h3>Java</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="img">
            <img
              src="assets/sass.png"
              alt="sass icon img"
              className="skill-icon"
            />
            <h3>Scss</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
