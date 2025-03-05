import { Link } from "react-router";
import {
  DeleteIcon,
  DiscordIcon,
  EnlargeIcon,
  LogoutIcon,
  PlusIcon,
} from "../Icons";
import Chats from "./Chats";

export default function Leftside(props) {
  function addChat() {
    props.setChats((prev) => {return [...prev, {id:props.chats.length + 1}]})
  }
  return (
    <div className="leftside p-2 d-flex flex-column justify-content-between">
      <div>
        <div className="new-chat-btn d-flex px-2 py-75 w-100 text-start rounded-1" onClick={addChat}>
          <div className="mx-2">
            <PlusIcon />
          </div>
          <span className="mx-1">New chat</span>
        </div>
      </div>
      <Chats chats={props.chats} />
      <div className="leftside-options">
        <div className="d-flex bg-transparent px-2 py-75 w-100 text-start">
          <div className="mx-2">
            <DeleteIcon />
          </div>
          <span className="mx-1">Clear conversations</span>
        </div>
        <div className="bg-transparent px-2 py-75 w-100 text-start">
          <img src="images/contrast.svg" alt="" className="mx-2" />
          <span className="mx-1">Light mode</span>
        </div>
        <div className="d-flex bg-transparent px-2 py-75 w-100 text-start">
          <div className="mx-2">
            <DiscordIcon />
          </div>
          <span className="mx-1">OpenAI Discord</span>
        </div>
        <div className="d-flex bg-transparent px-2 py-75 w-100 text-start">
          <div className="mx-2">
            <EnlargeIcon />
          </div>
          <span className="mx-1">Updates & FAQ</span>
        </div>
        <Link
          to="/"
          className="d-flex bg-transparent px-2 py-75 d-block w-100 text-start"
        >
          <div className="mx-2">
            <LogoutIcon />
          </div>
          <span className="mx-1">Log out</span>
        </Link>
      </div>
    </div>
  );
}
