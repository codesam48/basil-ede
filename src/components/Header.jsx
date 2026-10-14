import Icon from "./Icon.jsx";

const links = [
  ["about", "About", "user"],
  ["skills", "Skills", "shield"],
  ["contact", "Contact", "mail"],
];

export default function Header({ active }) {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top">
          {/* <Icon name="terminal" size={18} /> */}
          basil<span>Ede</span>
        </a>
        <nav aria-label="Sections">
          <ul>
            {links.map(([id, label, icon]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "on" : ""} aria-label={label}>
                  <Icon name={icon} size={16} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
