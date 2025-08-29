import { useState } from "react";
import "../styles/NavBar.css";

function NavBar() {
  const [active, setActive] = useState("about");

  const links = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  return (
    <div className="nav-box">
      {links.map((link) => (
        <a
          key={link}
          href={"#${link.tolowerCase()}"}
          className={`nav-link ${active === link ? "active" : ""}`}
          onClick={() => setActive(link)}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default NavBar;
