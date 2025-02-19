import PopupButton from "./PopupButton";
import Tasks from "./Task/Tasks";

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
          <Tasks
            setTaskIndex={props.setTaskIndex}
            setEditMode={props.setEditMode}
            editMode={props.editMode}
            tasks={props.tasks}
            setShowPopup={props.setShowPopup}
            setTasks={props.setTasks}
            setTaskInput={props.setTaskInput}
            taskInput={props.taskInput}
            selectedFilter={props.selectedFilter}
            searchItem={props.searchItem}
          />
        )}
      </div>
      <PopupButton setShowPopup={props.setShowPopup} />
    </main>
  );
}
