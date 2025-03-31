import ChatPage from "./ChatPage";
import Leftside from "./LeftSide";
import { useState, useEffect } from "react";

export default function ChatbotLayout(props) {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    chats.length > 0 && localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats])
  useEffect(() => {
    const storagedChats = localStorage.getItem("chats");
    storagedChats && setChats(JSON.parse(storagedChats));
  },[])
  useEffect(() => {
    console.log(chats);
  })
  return (
    <div className={`chatbot-page d-flex ${props.isLight && "light"}`}>
      <Leftside setChats={setChats} chats={chats} isLight={props.isLight} setIsLight={props.setIsLight} />
      <ChatPage setChats={setChats} chats={chats} />
    </div>
  );
}
// id title messages isActive