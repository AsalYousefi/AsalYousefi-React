import Input from "./Input";
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({});
  function changeUsername(event) {
    console.log(formData);
    setFormData((prev) => ({...prev, username: event.target.value}))
  }
  function changeEmail(event) {
    console.log(formData);
    setFormData((prev) => ({...prev, email: event.target.value}))
  }
  function changeMobile(event) {
    console.log(formData);
    setFormData((prev) => ({...prev, mobile: event.target.value}))
  }
  function changePassword(event) {
    console.log(formData);
    setFormData((prev) => ({...prev, password: event.target.value}))
  }
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <form className="d-flex flex-column align-items-center" onSubmit={submitHandler}>
      <Input type={"text"} name={"Username"} function={changeUsername} />
      <Input type={"email"} name={"Email"} function={changeEmail} />
      <Input type="number" name={"Mobile Number"} function={changeMobile} />
      <Input type={"password"} name={"Password"} function={changePassword} />
      <button type="submit">Submit</button>
    </form>
  );
}
