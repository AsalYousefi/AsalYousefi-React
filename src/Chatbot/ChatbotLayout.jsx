import ChatPage from "./ChatPage";
import Leftside from "./LeftSide";


export default function ChatbotLayout() {
  return (
    <div className="chatbot-page d-flex">
      <Leftside />
      <ChatPage />
    </div>
  );
}
