import { useState } from "react";
import { Link } from "react-router";

export default function BurgerMenu(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-md-none">
      <div className="pointer text-end mx-4" onClick={() => setIsOpen((prev) => !prev)}>
        <img src="/icon-hamburger.svg" className="menu-icon" width={30} height={30} alt="menu-icon" />
      </div>
      {isOpen && (
        <div className="menu position-absolute top-0 end-0 py-4 h-full">
          <div className="pointer mb-5 w-100 text-end me-5 pe-3" onClick={() => setIsOpen(false)}>
            <img src="/icon-close.svg" className="close-icon" width={30} height={30} alt="close-icon" />
          </div>
          <div className="w-100">
            <ul className="d-flex flex-column w-100">
              {props.navItems.map((item, index) => {
                return (
                  <li key={index} className={`menu-item w-100 py-1 my-3 ${item.isActive ? "active" : "hover"}`}>
                    <Link to={`/${item.title}`} className="text-uppercase text-white fw-light">
                      <span className="fw-bold me-3">{`0${index}`}</span>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}