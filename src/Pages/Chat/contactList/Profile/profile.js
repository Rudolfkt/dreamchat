import "./profile.css";
import { Avatar } from '@mui/material';
import { Cog6ToothIcon, SpeakerXMarkIcon, TrashIcon, UserMinusIcon, ChatBubbleLeftRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const UserProfile = () => {
    return (
        <div className="user-profile">
            <div className="profile-photo">
                <Avatar
                    src="https://ui-avatars.com/api/?name=Rudolf&size=45&background=1ebea5&color=fff"
                    alt="Profile"
                    sx={{ width: 40, height: 40 }}
                />

                <button type="button" className="add-contact-btn">
                    <i className="fa fa-user-plus" />
                </button>
            </div>

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

export default UserProfile;