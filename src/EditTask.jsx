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
  } = props;
  function editTask() {
    setShowPopup(true);
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }
  return (
    <button onClick={editTask}>
      <FontAwesomeIcon icon={faPencil} />
    </button>
  );
}
