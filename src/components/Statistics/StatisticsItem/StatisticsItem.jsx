import css from './StatisticsItem.module.css';
import { setRandomColor } from 'components/utils/setRandomColor';
import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage }) => {
    return (
        <li className={css.item} style={{
            backgroundColor: setRandomColor(),
        }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    );
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}