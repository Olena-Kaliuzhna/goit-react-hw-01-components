import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from './TransactionHistory.module.css';

function TransactionHistory({items}) {
   
    return (
    <table className={styles.transactionHistory}>
      <thead>
         <tr>
           <th>Type</th>
           <th>Amount</th>
           <th>Currency</th>
         </tr>
     </thead>
     <tbody>
    
      {items.map(item => {
        const { id, type, amount, currency} = item;
        return (
            <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            />
        );
      })}
        
     </tbody>
    </table>
  );
}


TransactionHistory.propTypes = {
    items: PropTypes.array,
};


export default TransactionHistory;