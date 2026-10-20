import SectionHead from "./SectionHead.jsx";
import { profile } from "../data.js";

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

          <div className="cyber-panel" role="group" aria-label="Cybersecurity status panel">
            <div className="cyber-panel__hud">
              <span className="hud-dot" />
              <span>security overview</span>
              <span className="hud-live">live</span>
            </div>

            <div className="cyber-orbit" aria-hidden="true">
              <div className="ring ring-one" />
              <div className="ring ring-two" />
              <div className="core">
                <strong>01</strong>
                <small>Threat Model</small>
              </div>
              <div className="scan-line" />
            </div>

            {/* <div className="cyber-stats">
              <div>
                <small>Focus</small>
                <strong>Network Defense</strong>
              </div>
              <div>
                <small>Tools</small>
                <strong>Nmap / Wireshark</strong>
              </div>
              <div>
                <small>Status</small>
                <strong>Open to work</strong>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
