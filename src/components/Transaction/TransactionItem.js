import React from 'react';
import PropTypes from 'prop-types';
import './TransactionItem.module.css';

function TransactionItem(item) {
  const {type, amount, currency} = item;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
    
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;