export default function Messages(props) {
  return (
    <div className="d-flex flex-column">
      {props.chats.map((chat) => {
        if (chat.isActive) {
          chat.messages.map((msg) => {
          return(
            <div
              className={`${
                msg.sender === "user" ? "align-self-end" : "align-self-start"
              }`}
              key={chat.id}
            >
              {msg.text}
            </div>
          )
          });
        }
      })}
    </div>
  );
}
