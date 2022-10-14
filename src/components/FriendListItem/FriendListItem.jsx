import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
          <li className={s.item} key={id}>
            <span className={isOnline ? s.statusOnline : s.statusOffline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
          </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}