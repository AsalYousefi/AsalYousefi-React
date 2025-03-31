import Messages from "./Messages";
import { LikeIcon, DislikeIcon, SendIcon } from "../Icons";
import { useRef } from "react";
// set OLLAMA_HOST=127.0.0.1:12345
export default function ChatPage(props) {
  const messageInput = useRef("");
  const inputHandler = useRef();

  async function sendMessage() {
    inputHandler.current.value = "";
    console.log(messageInput.current);
    let isActiveCount = 0;
    props.setChats((prev) => {
      const updateChats = prev.map((chat) => {
        if (chat.isActive) {
          isActiveCount = 1;
          return {
            ...chat,
            title: chat.messages.length === 0 ? messageInput.current : chat.messages[0].text,
            messages: [
              ...chat.messages,
              { sender: "user", text: messageInput.current },
            ],
          };
        }
        return chat;
      });
      if (isActiveCount === 0) {
        return [
          ...updateChats,
          {
            id: props.chats.length + 1,
            title: messageInput.current,
            messages: [{ sender: "user", text: messageInput.current }],
            isActive: true,
          },
        ];
      }
      return updateChats;
    });
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        model: "llama3.2:1b",
        prompt: messageInput.current,
        stream: false,
      }),
    });
    const answer = await response.json();
    props.setChats((prev) =>
      prev.map((chat) => {
        if (chat.isActive) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              { sender: "bot", text: answer.response },
            ],
          };
        }
      })
    );
  }

  function messageInputHandler(e) {
    messageInput.current = e.target.value;
  }

  return (
    <div className="chat-page h-full d-flex flex-column justify-content-between">
      <div className="about-chatbot fs-15 my-2">
        <div className="d-flex py-2 justify-content-start w-75 mx-auto align-items-center">
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
              <div className="pointer">
                <LikeIcon />
              </div>
              <div className="pointer">
                <DislikeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Messages chats={props.chats} />
      <div className="text-center w-75 mx-auto py-3">
        <div className="chatbox rounded-1 my-2 px-2 d-flex w-75 mx-auto align-items-center">
          <input
            type="text"
            className="chat-input form-control border-0 bg-transparent"
            ref={inputHandler}
            onChange={messageInputHandler}
          />
          <div className="send pointer" onClick={sendMessage}>
            <SendIcon />
          </div>
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
