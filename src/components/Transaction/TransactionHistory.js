import React from 'react';
import PropTypes from 'prop-types';

import TransactionItem from './TransactionItem';

function TransactionHistory({items}) {
   
    return (
    <table className="transaction-history">
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