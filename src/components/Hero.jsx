import Icon from "./Icon.jsx";
import photo from "../assets/basil.jpg";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">
            <Icon name="pin" size={15} />
            {profile.location}
          </p>
          <h1 className="p-heroname">{profile.name}</h1>
          <p className="role">cybersecurity analyst</p>
          <p className="lede">{profile.intro}</p>
          <div className="cta">
            <a className="btn primary" href="#skills">
              View Skills
              <Icon name="arrow" size={17} />
            </a>
            <a className="btn" href="#contact">
              <Icon name="mail" size={17} />
              Contact Me
            </a>
          </div>
        </div>
        <div className="portrait">
          <img
            src={photo}
            width="560"
            height="560"
            alt="Portrait of Basil Chinogonum Ede in a pale yellow shirt"
          />
          {/* <span className="badge">
            <Icon name="shield" size={15} />
            security analyst
          </span> */}
        </div>
      </div>
    </div>
  );
}
