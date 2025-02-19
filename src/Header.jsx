import DarkModeButton from "./DarkModeButton";
import DropdownMenu from "./DropdownMenu";

export default function Header(props) {
  function searchItems(e) {
    const filteredItem = props.tasks.filter(item => item.taskTitle.includes(e.target.value));
    props.setSearchItem(filteredItem.map((item) => {return item}));
  }
  return (
    <header>
      <div className="container">
        <div className="header-title d-flex justify-content-center my-2 p-3 align-items-center">
          <h1 className="text-uppercase fw-bold">TODO LIST</h1>
        </div>
        <div className="d-flex justify-content-around">
          <div className="search-box rounded-2 w-75 p-1 my-2">
            <form
              action=""
              className="d-flex align-items-center justify-content-between"
            >
              <input
                className="fs-5 w-100 px-3 py-1 border-0"
                type="search"
                placeholder="Search note..."
                onChange={searchItems}
              />
              <button className="border-0">
                {props.darkMode ? <img src="images/dark search.svg" /> : <img src="images/search.svg" alt="search-icon" />}
              </button>
            </form>
          </div>
          <DropdownMenu setSelectedFilter={props.setSelectedFilter} selectedFilter={props.selectedFilter} />
          <DarkModeButton setDarkMode={props.setDarkMode} darkMode={props.darkMode} />
        </div>
      </div>
    </header>
  );
}
