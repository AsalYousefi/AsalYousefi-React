export default function DropdownMenu(props) {
  function filterTasks(e) {
    props.setSelectedFilter(e.target.text)
  }
  return (
    <div className="dropdown my-2">
      <button
        className="text-uppercase rounded-2 fw-bold d-flex justify-content-between px-3 align-items-center h-100 nav-item nav-link dropdown dropdown-toggle"
        data-bs-toggle="dropdown"
      >{props.selectedFilter}</button>
      <div className="dropdown-menu">
        <a className="dropdown-item text-capitalize" onClick={filterTasks}>all</a>
        <a className="dropdown-item text-capitalize" onClick={filterTasks}>complete</a>
        <a className="dropdown-item text-capitalize" onClick={filterTasks}>incomplete</a>
      </div>
    </div>
  );
}
