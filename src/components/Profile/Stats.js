import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Stats.module.css';

function Stats({ stats }) {
  const { followers, views, likes } = stats;
  return (
    <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
  );
}

Stats.protoTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Stats;