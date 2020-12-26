import React from 'react';
import UserInfo from './UserInfo';
import Stats from './Stats';
import styles from './Profile.module.css';

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={styles.profile}>
      <UserInfo
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Stats stats={stats} />
    </div>
  );
}

export default Profile;
