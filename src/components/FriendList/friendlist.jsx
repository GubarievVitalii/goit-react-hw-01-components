import s from './Friendlist.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const Friendlist = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id} />
            ))}
        </ul>
    )
}

Friendlist.propTypes = {
    friends: PropTypes.string.isRequired,
}
