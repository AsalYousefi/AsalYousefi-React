// import DropdownMenu from "./DropdownMenu";

import DarkModeButton from "./DarkModeButton";

export default function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="header-title d-flex justify-content-center my-2 p-3 align-items-center">
          <h1 className="text-uppercase fw-bold">TODO LIST</h1>
        </div>
        <div className="d-flex justify-content-between">
          <div className="search-box rounded-2 w-75 p-1">
            <form
              action=""
              className="d-flex align-items-center justify-content-between"
            >
              <input
                className="fs-5 w-100 px-3 py-1 border-0"
                type="search"
                placeholder="Search note..."
              />
              <button className="border-0">
                <img src="images/search.svg" alt="search-icon" />
              </button>
            </form>
          </div>
          <DarkModeButton setDarkMode={props.setDarkMode} />
        </div>
      </div>
    </header>
  );
}
