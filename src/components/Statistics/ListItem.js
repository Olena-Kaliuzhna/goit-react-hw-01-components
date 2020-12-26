import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';
import colorRandom from '../../services/colorRandom';

function ListItem({id, label, percentage}) {
  return (
    <li key={id} style={{ backgroundColor: colorRandom()}} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}


ListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default ListItem;
