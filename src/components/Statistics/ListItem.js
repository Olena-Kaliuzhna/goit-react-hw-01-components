import React from 'react';
import PropTypes from 'prop-types';
function ListItem({id, label, percentage}) {
  return (
    <li key={id}>
      <span >{label}</span>
      <span >{percentage}%</span>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default ListItem;