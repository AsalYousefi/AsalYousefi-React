export default function Task(props) {
  return (
    <div className="tasks-list">
      {props.tasks.length > 0 &&
        props.tasks.map((task, index) => {
          return (
            <div className="task-item" key={index}>
              <input type="checkbox" name="task" id={index} />
              <label htmlFor={index}>{task}</label>
            </div>
          );
        })}
    </div>
  );
}
