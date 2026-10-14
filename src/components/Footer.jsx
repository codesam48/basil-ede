import Icon from "./Icon.jsx";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>&copy; 2026 {profile.name}. All rights reserved.</span>
        <span className="links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={16} />
            LinkedIn
          </a>
          <a href="#top">
            <Icon name="arrow" size={16} />
            Back to top
          </a>
        </span>
      </div>
    </footer>
  );
}
