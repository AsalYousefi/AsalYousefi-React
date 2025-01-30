import { useState } from "react";

export default function PopupButton(props) {
  function popupHandler() {
    props.setShowPopup((prev) => {return !prev});
  }
  return (
    <button className="popup-btn p-3 rounded-circle" onClick={popupHandler}>
      <img src="images/plus.svg" alt="" />
    </button>
  );
}
