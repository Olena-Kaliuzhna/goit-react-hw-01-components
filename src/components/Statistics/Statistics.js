import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';


function Statistics({stats, title}) {
  if (stats.length === 0) return null;
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <StatisticsList stats={stats} />
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};

export default Statistics;