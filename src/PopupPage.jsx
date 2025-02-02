import { useState } from "react";

export default function PopupPage(props) {
  function taskHandler(e) {
    props.setTaskInput(e.target.value);
  }
  function closePopup() {
    props.setShowPopup(false);
    props.editMode && props.setEditMode(false);
  }
  function addTask() {
    props.setTasks([...props.tasks, props.taskInput]);
    props.setShowPopup(false);
  }
  return (
    <div className={`popup w-50 mx-auto py-2 px-3 ${props.darkMode ? "darkmode" : "lightmode"}`}>
      <div className=" container d-flex flex-column">
        <h2 className="text-uppercase text-center fw-bold my-2 mb-4">
          new note
        </h2>
        <input
          onChange={taskHandler}
          type="text"
          placeholder="Input your note..."
          className="form-control px-3 py-2"
        />
        <div className="popup-buttons mb-3 d-flex justify-content-between align-items-end">
          <button
            className="cancel-btn rounded-3 text-uppercase fw-bold fs-4 px-3 py-1"
            onClick={closePopup}
          >
            cancel
          </button>
          <button
            className="apply-btn rounded-3 text-uppercase fw-bold fs-4 px-3 py-1"
            onClick={addTask}
          >
            apply
          </button>
        </div>
      </div>
    </div>
  );
}
