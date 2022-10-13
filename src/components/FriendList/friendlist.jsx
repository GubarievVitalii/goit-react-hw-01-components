import s from './Friendlist.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem'

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
