import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";

export default function Header() {

  const [navItems, setNavItems] = useState([
    {title: "home", isActive: true },
    {title: "destination", isActive: false },
    {title: "crew", isActive: false },
    {title: "technology", isActive: false },
  ]);

  return (
    <header className="header position-relative pt-xl-4 w-100 d-flex align-items-center justify-content-between">
      <Link to="/" className="m-5">
        <img src="/Subtract.svg" className="logo" alt="logo" width={40} height={40} />
      </Link>
      <div className="line position-absolute d-none d-xl-block"></div>
      <BurgerMenu navItems={navItems} />
      <Navbar navItems={navItems} />
    </header>
  );
}