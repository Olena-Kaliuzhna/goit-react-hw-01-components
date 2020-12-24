import React from 'react';
  import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';


function Statistics({stats, title}) {
  if (stats.length === 0) return null;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <StatisticsList stats={stats} />
     
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};

export default Statistics;