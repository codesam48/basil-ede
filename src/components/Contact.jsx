import { useState } from "react";
import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import { profile } from "../data.js";

function CopyButton({ text, label }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard blocked: the text is still selectable */
    }
  }

  return (
    <button className="copy" type="button" onClick={copy} aria-label={`Copy ${label}`}>
      <Icon name={done ? "check" : "copy"} size={13} />
      {done ? "copied" : "copy"}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [composed, setComposed] = useState(false);
  const [copied, setCopied] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const draft =
    `From: ${form.name.trim()} <${form.email.trim()}>\n` +
    `To: ${profile.email}\n` +
    `Subject: Portfolio message from ${form.name.trim()}\n\n` +
    `${form.message.trim()}\n\n` +
    `Reply to: ${form.email.trim()}`;

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio message from ${form.name.trim()}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
  )}`;

  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim() || form.email.indexOf("@") < 1) {
      setError("Add your name, a valid email address and a message.");
      setComposed(false);
      return;
    }
    setError("");
    setCopied("");
    setComposed(true);
    window.location.href = mailtoHref;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied("copied");
    } catch {
      setCopied("copy blocked, select the text");
    }
  }

  const reach = [
    {
      icon: "mail",
      label: "Email",
      body: (
        <span className="row">
          <span className="v">{profile.email}</span>
          <CopyButton text={profile.email} label="email" />
        </span>
      ),
    },
    {
      icon: "phone",
      label: "Phone",
      body: (
        <span className="row">
          <span className="v">{profile.phone}</span>
          <CopyButton text={profile.phone} label="phone number" />
        </span>
      ),
    },
    {
      icon: "pin",
      label: "Location",
      body: <span className="v">{profile.location}</span>,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      body: (
        <a className="v" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          {profile.linkedinLabel}
        </a>
      ),
    },
  ];

  return (
    <section id="contact">
      <div className="wrap">
        <SectionHead icon="mail" title="Contact" hint="/ get in touch" />
        <div className="contact-grid">
          <ul className="reach">
            {reach.map((r) => (
              <li key={r.label}>
                <span className="ico">
                  <Icon name={r.icon} size={19} />
                </span>
                <div>
                  <span className="k">{r.label}</span>
                  <span className="link">{r.body}</span>
                </div>
              </li>
            ))}
          </ul>

          <div>
            {/*
              This form does not send anything yet. To receive messages by email,
              point it at a form service (Formspree, Web3Forms, Netlify Forms) or
              your own backend inside submit().
            */}
            <form onSubmit={submit} noValidate>
              <label htmlFor="f-name">
                Name
                <input id="f-name" type="text" autoComplete="name" value={form.name} onChange={update("name")} />
              </label>
              <label htmlFor="f-email">
                Email
                <input id="f-email" type="email" autoComplete="email" value={form.email} onChange={update("email")} />
              </label>
              <label htmlFor="f-msg">
                Message
                <textarea id="f-msg" value={form.message} onChange={update("message")} />
              </label>
              <button className="btn primary" type="submit">
                <Icon name="send" size={17} />
                Write Message
              </button>
              {error && (
                <p className="err" role="alert">
                  {error}
                </p>
              )}
            </form>

            {composed && (
              <div className="compose">
                <p>
                  Your email app should open with the message already filled in and sent to{" "}
                  <strong>{profile.email}</strong>.
                </p>
                <pre>{draft}</pre>
                <div className="actions">
                  <a className="btn" href={mailtoHref}>
                    <Icon name="send" size={16} />
                    Send via email
                  </a>
                  <button className="btn" type="button" onClick={copyDraft}>
                    <Icon name="copy" size={16} />
                    Copy message
                  </button>
                  <span className="state" aria-live="polite">
                    {copied}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
