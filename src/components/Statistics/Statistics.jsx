import { StatisticItem } from './StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                <StatisticItem
                    key={id}
                    label={label}
                    percentage={percentage}
                />
                    );
                })}
            </ul>
        </section>
    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}