import "./options.css";
import { Cog6ToothIcon, SpeakerXMarkIcon, TrashIcon, UserMinusIcon, ChatBubbleLeftRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const Options = () => {
    return (
        <div className="options">
            <button className="settings">
                <Cog6ToothIcon className="options-icon" />
                <span className="options-text">Settings</span>
            </button>
            <button className="mute">
                <SpeakerXMarkIcon className="options-icon" />
                <span className="options-text">Mute</span>
            </button>
            <button className="block">
                <UserMinusIcon className="options-icon" />
                <span className="options-text">Block</span>
            </button>
            <button className="delete">
                <TrashIcon className="options-icon" />
                <span className="options-text">Delete</span>
            </button>
            <button className="clear-chat">
                <ChatBubbleLeftRightIcon className="options-icon" />
                <span className="options-text">Clear Chat</span>
            </button>
            <button className="more">
                <EllipsisHorizontalIcon className="options-icon" />
                <span className="options-text">More</span>
            </button>
        </div>
    );
};

export default Options;