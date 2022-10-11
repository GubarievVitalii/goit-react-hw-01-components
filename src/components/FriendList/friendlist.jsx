import {FriendListItem} from '../FriendListItem/FriendListItem'

export const Friendlist = ({ friends }) => {
    return (
        <ul class="friend-list">
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
