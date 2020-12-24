import React from 'react';
import PropTypes from 'prop-types';

const defaultAvatar =
  'https://lh3.googleusercontent.com/proxy/_XHu1teqnkoQLhQCoM_0DWz4fTIpmbWWVqXM0RrEjMqK1_q2IFHrSeAId3p-YJSZiyHHEAd7BmHl6hREpMoOQ781C__seXDPBiDDey2o9UwhowhFtw';
function FriendItem({ avatar = defaultAvatar, name, isOnline, id}) {
  // const status = isOnline ? ss.online : ss.offline;
    return (
     <li key={id} className="item">
        <span className="status" ></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
  );
}

FriendItem.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};


export default FriendItem;