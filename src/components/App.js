import React from 'react';
import Profile from './Profile/Profile';
import user from '../Data/user.json'
import Statistics from './Statistics/Statistics';
import statisticalData from '../Data/statistical-data.json'
import FriendList from './FriendList/FriendList';
import friends from '../Data/friends.json'
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../Data/transactions.json'

function  App() {
  return (
    <>
      <h1>React homework-1</h1> 
      <h2>task-1</h2> 
      <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />  
      <h2>task-2</h2> 
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>task-3</h2> 
      <FriendList friends={friends} />,
      <h2>task-4</h2> 
      <TransactionHistory items={transactions} />;
    </>
  )
};
export default App;