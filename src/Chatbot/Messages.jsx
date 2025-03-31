export default function Messages(props) {
  return (
    <div className="d-flex flex-column h-100 w-75 mx-auto overflow-y-scroll">
      {props.chats &&
        props.chats.map((chat) => {
          if (chat.isActive) {
            return chat.messages.map((msg, index) => (
              <div
                className={`message rounded-4 my-2 px-3 py-2 ${
                  msg.sender === "user" ? "align-self-end" : "align-self-start"
                }`}
                key={index}
              >
                {msg.text}
              </div>
            ));
          }
          return null;
        })}
    </div>
  );
}
