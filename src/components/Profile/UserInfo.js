import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';
const defaultAvatar =
  'https://lh3.googleusercontent.com/proxy/_XHu1teqnkoQLhQCoM_0DWz4fTIpmbWWVqXM0RrEjMqK1_q2IFHrSeAId3p-YJSZiyHHEAd7BmHl6hREpMoOQ781C__seXDPBiDDey2o9UwhowhFtw';
function UserInfo({name, tag, location, avatar = defaultAvatar}) {    
  return (
    
       <div className={styles.description}>
          <img
          src= {avatar}
          alt= {name}
          className={styles.avatar}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
       </div>    
    
  )
    
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string, 
  
};
export default UserInfo;