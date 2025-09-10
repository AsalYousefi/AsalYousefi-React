import { Link } from "react-router";

export default function Navbar(props) {
  return (
    <nav className="d-none d-md-block h-100">
      <ul className="d-flex justify-content-around align-items-center h-100 ms-5">
        {props.navItems.map((item, index) => {
          return (
            <li
              key={index}
              className={`navbar-item h-100 pt-xl-4 ${item.isActive ? "active" : "hover"}`}
            >
              <Link
                href={`/${item.title}`}
                className="text-uppercase text-white fw-light"
              >
                <span className="fw-bold me-3">{`0${index}`}</span>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}