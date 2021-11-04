import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import {ReactComponent as LogoSvg} from "../../img/Logo.svg";

const Navbar = React.memo(function Navbar() {

  return (
    <div className={s.navbar}>
      <div className={s.logo}><LogoSvg/></div>
      <div className={s.menu}>
        <div className={s.container}>
          <NavLink to="/" className={s.nav__links}>Форма</NavLink >
          <NavLink to='/preview' className={s.nav__links}>Превью</NavLink >
        </div>
      </div>
    </div>
  );
})
export default Navbar;

