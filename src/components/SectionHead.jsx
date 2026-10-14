import Icon from "./Icon.jsx";

export default function SectionHead({ icon, title, hint }) {
  return (
    <div className="sec-head">
      <Icon name={icon} size={22} />
      <h2>{title}</h2>
      <span>{hint}</span>
    </div>
  );
}
