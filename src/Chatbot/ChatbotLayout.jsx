import ChatPage from "./ChatPage";
import Leftside from "./LeftSide";
import { useState, useEffect } from "react";

export default function ChatbotLayout() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    !chats && localStorage.setItem("chats", JSON.stringify(chats))
  }, [chats])
  useEffect(() => {
    const storagedChats = JSON.parse("chats");
    storagedChats && setChats(storagedChats);
  },[])
  return (
    <div className="chatbot-page d-flex">
      <Leftside setChats={setChats} chats={chats} />
      <ChatPage setChats={setChats} chats={chats} />
    </div>
  );
}
// id title messages isActive