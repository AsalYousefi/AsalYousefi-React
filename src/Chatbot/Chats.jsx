import { DeleteIcon, EditIcon, MessageIcon } from "../Icons";

export default function Chats(props) {
  function showChat(index) {
    props.chats.map((chat) => {
      if (chat.isActive) chat.isActive = !chat.isActive;
    });
    const updateChats = [...props.chats];
    updateChats[index].isActive = true;
    props.setChats(updateChats);
  }

  function deleteChat(index) {
    const updateChats = [...props.chats];
    updateChats.splice(index, 1);
    props.setChats(updateChats);
  }

  return (
    <div className="my-2">
      {props.chats &&
        props.chats.map((chat, index) => {
          return (
            <div
              className={`chat ${
                chat.isActive && "active"
              } d-flex justify-content-between align-items-center px-2 py-75 my-1 pointer`}
              key={chat.id}
            >
              <div
                className="d-flex overflow-hidden w-75"
                onClick={() => showChat(index)}
              >
                <div className="mx-1">
                  <MessageIcon />
                </div>
                <span className="mx-1 text-nowrap" key={chat.id}>
                  {chat.title}
                </span>
              </div>
              <div className="chat-options d-flex">
                <div className="pointer mx-2">
                  <EditIcon />
                </div>
                <div className="pointer" onClick={() => deleteChat(index)}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
