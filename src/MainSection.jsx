import Task from "./Task";
import PopupButton from "./PopupButton";

export default function MainSection(props) {
  return (
    <main>
      <div className="container d-flex justify-content-center mt-3">
        {props.tasks.length === 0 ? (
          <div>
            <img
              src="images/Detective-check-footprint 1 (1).svg"
              alt="default-bg"
            />
            <p className="text-center fs-4" style={{fontWeight: 600}}>Empty...</p>
          </div>
        ) : (
          <Task
            setTaskIndex={props.setTaskIndex}
            setEditMode={props.setEditMode}
            editMode={props.editMode}
            tasks={props.tasks}
            setShowPopup={props.setShowPopup}
            setTasks={props.setTasks}
            setTaskInput={props.setTaskInput}
            taskInput={props.taskInput}
          />
        )}
      </div>
      <PopupButton setShowPopup={props.setShowPopup} />
    </main>
  );
}
