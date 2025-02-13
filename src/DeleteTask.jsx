import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DeleteTask(props) {
  const {tasks, setTasks, index} = props;
    function deleteTask() {
      const newTasks = [...tasks];
      newTasks.splice(index,1);
      setTasks(newTasks);
    }
  return (
    <button onClick={deleteTask} className="ms-2 delete-btn">
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
