import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Leftside() {
    return (
        <div className="leftside p-2 d-flex flex-column justify-content-between">
        <div>
          <div className="new-chat-btn px-2 py-75 w-100 text-start rounded-1">
            <FontAwesomeIcon icon={faPlus} className="mx-2" />
            <span className="mx-1">New chat</span>
          </div>
        </div>
        <div className="leftside-options">
          <div className="bg-transparent px-2 py-75 border-gray w-100 text-start">
            <img src="images/delete.svg" alt="" className="mx-2" />
            <span className="mx-1">Clear conversations</span>
          </div>
          <div className="bg-transparent px-2 py-75 border-gray w-100 text-start">
            <img src="images/contrast.svg" alt="" className="mx-2" />
            <span className="mx-1">Light mode</span>
          </div>
          <div className="bg-transparent px-2 py-75 border-gray w-100 text-start">
            <img src="images/discord.svg" alt="" className="mx-2" />
            <span className="mx-1">OpenAI Discord</span>
          </div>
          <div className="bg-transparent px-2 py-75 border-gray w-100 text-start">
            <img src="images/enlarge.svg" alt="" className="mx-2" />
            <span className="mx-1">Updates & FAQ</span>
          </div>
          <Link
            to="/"
            className="bg-transparent px-2 py-75 border-gray d-block w-100 text-start"
          >
            <img src="images/logout.svg" alt="" className="mx-2" />
            <span className="mx-1">Log out</span>
          </Link>
        </div>
      </div>
    )
}