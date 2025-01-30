export default function DarkModeButton(props) {
  function screenHandler() {
    props.setDarkMode((prev) => !prev);
  }
  return (
    <button
      className="darkmode-btn border-0 px-3 rounded-2"
      onClick={screenHandler}
    >
      <img src="images/darkmode.svg" alt="" />
    </button>
  );
}
