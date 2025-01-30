import Task from "./Task";

export default function MainSection(props) {
  return (
    <main>
      <div className="container d-flex justify-content-center mt-5">
        {props.tasks.length === 0 ? <img src="images/Detective-check-footprint 1.svg" alt="default-bg" /> : <Task tasks={props.tasks} />}
      </div>
    </main>
  );
}
