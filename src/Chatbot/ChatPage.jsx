import Messages from "./Messages";
import {LikeIcon , DislikeIcon, SendIcon} from "../Icons"

export default function ChatPage() {
  return (
    <div className="chat-page h-full d-flex flex-column justify-content-between">
      <div className="about-chatbot fs-15 my-2">
        <div className="d-flex justify-content-start w-75 mx-auto align-items-start">
          <img src="images/Avatar User.svg" alt="" className="mx-3" />
          <p>What is a Chatbot?</p>
        </div>
        <div className="chatbot-description pb-2 pt-3">
          <div className="d-flex justify-content-center w-75 mx-auto align-items-start">
            <img src="images/Avatar ChatGPT.svg" alt="" className="mx-3" />
            <p>
              A chatbot is a computer program that simulates human conversation
              through voice commands or text chats or both. It can be integrated
              with various messaging platforms like Facebook Messenger,
              WhatsApp, WeChat, etc. and can be used for a variety of purposes,
              such as customer service, entertainment, and e-commerce.
            </p>
            <div className="d-flex mx-3 justify-content-around w-25 my-2">
                <div className="pointer"><LikeIcon /></div>
                <div className="pointer"><DislikeIcon /></div>
            </div>
          </div>
        </div>
      </div>
      <Messages />
      <div className="text-center w-75 mx-auto py-3">
        <div className="chatbox rounded-1 my-2 px-2 d-flex w-75 mx-auto align-items-center">
          <input type="text" className="form-control border-0 bg-transparent" />
          <div className="send pointer"><SendIcon /></div>
        </div>
        <p className="description">
          <a href="#" className="description-link">
            ChatGPT Jan 9 Version.
          </a>
          Free Research Preview. Our goal is to make AI systems more natural and
          safe to interact with. Your feedback will help us improve.
        </p>
      </div>
    </div>
  );
}
