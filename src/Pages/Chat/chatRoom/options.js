import "./options.css"
import { Cog6ToothIcon, SpeakerXMarkIcon, TrashIcon, UserMinusIcon, ChatBubbleLeftRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const Options = () => {
    return (
        <div className="options">
            <button type="button" className="settings">
                <Cog6ToothIcon className="options-icon" />
                Settings
            </button>
            <button type="button" className="mute">
                <SpeakerXMarkIcon className="options-icon" />
                Mute
            </button>
            <button type="button" className="block">
                <UserMinusIcon className="options-icon" />
                Block
            </button>
            <button type="button" className="delete">
                <TrashIcon className="options-icon" />
                Delete
            </button>
            <button type="button" className="clear-chat">
                <ChatBubbleLeftRightIcon className="options-icon" />
                Clear Chat
            </button>
            <button type="button" className="more">
                <EllipsisHorizontalIcon className="options-icon" />
                More
            </button>
        </div>
    );
};

export default Options;