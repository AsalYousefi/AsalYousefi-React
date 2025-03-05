import ChatPage from "./ChatPage";
import Leftside from "./LeftSide";
import { useState } from "react";

export default function ChatbotLayout() {
  const [chats, setChats] = useState([]);
  return (
    <div className="chatbot-page d-flex">
      <Leftside setChats={setChats} chats={chats} />
      <ChatPage />
    </div>
  );
}
