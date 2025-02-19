import EditTask from "../EditTask";
import DeleteTask from "../DeleteTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CompleteTask from "./CompleteTask";
import IncompleteTask from "./IncompleteTask";
import AllTasks from "./AllTasks";
import SearchedItem from "./SearchedItem";

export default function Tasks(props) {
  return (
    <div className="tasks-list">
      {props.selectedFilter === "all" &&
      props.searchItem == null && (
        <AllTasks
          tasks={props.tasks}
          setTasks={props.setTasks}
          setTaskIndex={props.setTaskIndex}
          editMode={props.editMode}
          setEditMode={props.setEditMode}
          taskInput={props.taskInput}
          setTaskInput={props.setTaskInput}
          setShowPopup={props.setShowPopup}
        />
      )}
      {props.selectedFilter === "complete" && (
        <CompleteTask
          tasks={props.tasks}
          setTasks={props.setTasks}
          setTaskIndex={props.setTaskIndex}
          editMode={props.editMode}
          setEditMode={props.setEditMode}
          taskInput={props.taskInput}
          setTaskInput={props.setTaskInput}
          setShowPopup={props.setShowPopup}
        />
      )}
      {props.selectedFilter === "incomplete" && (
        <IncompleteTask
          tasks={props.tasks}
          setTasks={props.setTasks}
          setTaskIndex={props.setTaskIndex}
          editMode={props.editMode}
          setEditMode={props.setEditMode}
          taskInput={props.taskInput}
          setTaskInput={props.setTaskInput}
          setShowPopup={props.setShowPopup}
        />
      )}
      {props.searchItem !== null && (
        <SearchedItem
          setTasks={props.setTasks}
          tasks={props.tasks}
          searchItem={props.searchItem}
          setTaskIndex={props.setTaskIndex}
          editMode={props.editMode}
          setEditMode={props.setEditMode}
          taskInput={props.taskInput}
          setTaskInput={props.setTaskInput}
          setShowPopup={props.setShowPopup}
        />
      )}
    </div>
  );
}
