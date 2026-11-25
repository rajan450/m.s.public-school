"use client";
import { useState } from "react";

const LINKS = [
  ["#about", "About"],
  ["#approach", "Approach"],
  ["#life", "Life at school"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="w">
        <nav>
          <a className="brand" href="#top" onClick={close}>
            M.S. <b>Public</b> School
          </a>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
          </button>
          <div className={`menu${open ? " open" : ""}`}>
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} onClick={close}>
                {label}
              </a>
            ))}
            <a className="cta" href="#admission" onClick={close}>
              Admissions
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
