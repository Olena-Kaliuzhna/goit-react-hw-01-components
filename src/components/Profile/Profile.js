import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';


function Profile(props) {
    const { name, tag, location, avatar, stats} = props;
    return (
        <div className="profile">
        <div className="description">
    <img
        src= {avatar}
        alt= {name}
        className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
    </div>

  <Stats stats={stats} />
    </div>
    )
    
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string, 
  
};
export default Profile;