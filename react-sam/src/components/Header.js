import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";

import logo from "../assets/images/SAMlogotipo.png";
import menu from "../assets/images/menu.svg";
import user1 from "../assets/images/user1.svg";
import addCart from "../assets/images/add-to-cart.svg";
import pack from "../assets/images/caja.svg";

export function Header() {
  const { role } = useAuth();
  const [submenu, setSubmenu] = useState("");

  const showSubMenu = () => {
    if (submenu === "show") {
      setSubmenu("removeShow");
    } else {
      setSubmenu("show");
    }
  };

  const selectProfile = () => {
    if (role) {
      return "/personalAccount"
    } else {
      return "/login"
    }
  };

  return (
    <header className="header-nav">
      <nav>
        <button id="button-menu" onClick={showSubMenu}>
          <img src={menu} alt="menu" />
        </button>
        <img src={logo} alt="logo" id="logo" />
        <button className="login">
          <Link to={selectProfile}>
            <img src={user1} alt="login" />
          </Link>
        </button>
        {role === 'organizer' && (
          <button>
            <Link to="/createPack">
              <img src={pack} alt="pack" />
            </Link>
          </button>
        )}
        <button>
          <Link to="/shoppingCart">
            <img src={addCart} alt="carrito" />
          </Link>
        </button>
      </nav>

      <section data-name="submenu" className={submenu}>
        <ul>
          <li>
            <Link to="/catalogue"> CATÁLOGO </Link>
          </li>
          <li>
            <Link to={selectProfile}> MI CUENTA</Link>
          </li>
          <li>
            <Link to="/fqa"> PREGUNTAS FRECUENTES</Link>
          </li>
          <li>
            <Link to="/about"> ATENCIÓN AL CLIENTE</Link>
          </li>
          <li>
            <Link to="/legal"> LEGAL</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
