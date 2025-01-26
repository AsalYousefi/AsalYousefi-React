export default function Input(props) {
  return (
    <div className="d-flex justify-content-between w-25 p-2 align-items-center">
      <label htmlFor={props.name}>{props.name}:</label>
      <input className="rounded-2 px-2" type={props.type} placeholder={`Type Your ${props.name}...`} onChange={props.function} />
    </div>
  );
}
