import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => {
        return <ListItem key={id} label={label} percentage={percentage} />;
      })}
    </ul>
  );
}
StatisticsList.propTypes = {
  stats: PropTypes.array,
};
export default StatisticsList;
