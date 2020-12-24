import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function StatisticsList({ stats }) {
  return (
    <ul >
      {stats.map(stat => {
        const { id, label, percentage} = stat;
        return (
          <ListItem
            key={id}
            label={label}
            percentage={percentage}
            // color={randomColor()}
          />
        );
      })}
    </ul>
  );
}
StatisticsList.propTypes = {
  stats: PropTypes.array,
};
export default StatisticsList; 

