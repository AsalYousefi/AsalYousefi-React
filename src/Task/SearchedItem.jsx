import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import EditTask from "../EditTask";
import DeleteTask from "../DeleteTask";

export default function SearchedItem(props) {
  function taskStatus(index) {
    const updateTask = [...props.tasks];
    updateTask[index].isDone = !updateTask[index].isDone;
    props.setTasks(updateTask);
  }
  return (
    <>
      {props.searchItem.length > 0 && props.searchItem.map((task, index) => {
        return (
          <div key={index}>
            <div className="task-item px-3 py-2 my-3 d-flex justify-content-between">
              <div className="task d-flex justify-content-between">
                <button
                  className={`${task.isDone && "checked"} checkbox rounded-1`}
                  onClick={() => taskStatus(index)}
                >
                  {task.isDone && <FontAwesomeIcon icon={faCheck} />}
                </button>
                <h3 className="text-uppercase fs-5 mx-3 fw-bold">
                  {task.taskTitle}
                </h3>
              </div>
              <div className="task-icons">
                <EditTask
                  setTaskIndex={props.setTaskIndex}
                  editMode={props.editMode}
                  setEditMode={props.setEditMode}
                  setTasks={props.setTasks}
                  tasks={props.tasks}
                  taskInput={props.taskInput}
                  setTaskInput={props.setTaskInput}
                  index={index}
                  setShowPopup={props.setShowPopup}
                />
                <DeleteTask
                  index={index}
                  setTasks={props.setTasks}
                  tasks={props.tasks}
                />
              </div>
            </div>
            <div className="purple-line w-100"></div>
          </div>
        );
      })}
    </>
  );
}
