import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
export default function Task(props) {
  console.log(props.tasks);
  return (
    <div className="tasks-list w-75">
      {props.tasks.length > 0 &&
        props.tasks.map((task, index) => {
          return (
            <div className="task-item px-3 py-2 my-3 d-flex justify-content-between" key={index}>
              <div className="task">
                <input className="" onChange={() => task.isDone = !task.isDone} type="checkbox" name="task" id={index} />
                <label htmlFor={index} className="text-uppercase fs-5 mx-3 fw-bold">{task.taskTitle}</label>
              </div>
              <div className="task-icons">
                <EditTask editMode={props.editMode} setEditMode={props.setEditMode} setTasks={props.setTasks} tasks={props.tasks} taskInput={props.taskInput} setTaskInput={props.setTaskInput} index={index} setShowPopup={props.setShowPopup} />
                <DeleteTask index={index} setTasks={props.setTasks} tasks={props.tasks} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
