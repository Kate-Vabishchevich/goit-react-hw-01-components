import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        id={id}
                    />
                );
            })}
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
}