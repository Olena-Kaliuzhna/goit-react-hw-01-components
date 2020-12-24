import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

function FriendList({ friends }) {
   if (friends.length === 0) return null;
    return (
      <ul >
        {friends.map(friend => {
          const { avatar, name, id, isOnline} = friend;
          return (
              <FriendItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
              />
          );
        })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;