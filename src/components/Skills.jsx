import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead icon="shield" title="Skills" hint="/ what I work with" />
        <ul className="skills">
          {skills.map((s) => (
            <li key={s.title} className="skill-bobble">
              <span className="tile">
                <Icon name={s.icon} size={26} />
              </span>
              <strong>{s.title}</strong>
            </li>
          ))}
        </ul>
        <p className="interests">
          <Icon name="cpu" size={18} />
          <span>
            <b>Also interested in: </b>artificial intelligence and computer engineering.
          </span>
        </p>
      </div>
    </section>
  );
}
