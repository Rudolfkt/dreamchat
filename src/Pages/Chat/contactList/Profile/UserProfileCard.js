import './UserProfileCard.css';
import { Avatar } from '@mui/material';

const UserProfileCard = ({ contact }) => {

    return (
        <div className="user-profile-card">
            <button className="profile-photo-card">
                <Avatar
                    className="profile-avatar"
                    src="https://ui-avatars.com/api/?name=Rudolf&size=45&background=1ebea5&color=fff"
                    alt="Profile"
                    sx={{ width: 40, height: 40 }}
                />
                <p className='name'>Rudolf</p>
                <p className='bio'>Ad Astra</p>
            </button>
            <button className="profile-action">Account</button>
            <button className="profile-action">Chats</button>
            <button className="profile-action">Wallet</button>
            <button className="profile-action">Saved Messages</button>
            <button className="profile-action">Recent Calls</button>
            <button className="profile-action">Linked Devices</button>
            <button className="profile-action">Themes</button>
            <button className="help">Help</button>

            
        </div>
    );
};

export default UserProfileCard;