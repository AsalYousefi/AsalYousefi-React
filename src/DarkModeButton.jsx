export default function DarkModeButton(props) {
  function screenHandler() {
    props.setDarkMode((prev) => !prev);
  }
  return (
    <button
      className="darkmode-btn border-0 px-3 rounded-2 my-2"
      onClick={screenHandler}
    >
      {props.darkMode ? <img src="images/lightmode.svg" /> :<img src="images/darkmode.svg" alt="" />}
    </button>
  );
}
