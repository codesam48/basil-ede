import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import { profile, details } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead icon="user" title="About" hint="/ background" />
        <div className="about-grid">
          <div>
            {profile.about.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="term" role="group" aria-label="Profile summary">
            {/* <div className="term-bar">
              <i />
              <i />
              <i />
              <em>profile.txt</em>
            </div> */}
            <div className="term-body">
              {/* <p className="cmd">
                <b>$</b> whoami --details
              </p> */}
              <dl>
                {details.map(([icon, label, value]) => (
                  <div key={label} style={{ display: "contents" }}>
                    <dt>
                      <Icon name={icon} size={15} />
                      {label}
                    </dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="cmd">
                status
              </p>
              <p className="live">
                <span className="dot" />
                open to opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
