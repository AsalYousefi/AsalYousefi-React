import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function EditTask(props) {
  const {
    setShowPopup,
    setEditMode,
    editMode,
    taskInput,
    setTaskInput,
    tasks,
    setTasks,
    index,
    setTaskIndex
  } = props;
  function editTask() {
    setShowPopup(true);
    setEditMode(true);
    setTaskInput(tasks[index].taskTitle)
    setTaskIndex(index)
  }
  return (
    <button onClick={editTask} className="edit-btn">
      <FontAwesomeIcon icon={faPencil} />
    </button>
  );
}
