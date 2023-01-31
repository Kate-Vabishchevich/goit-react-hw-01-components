import css from './TransHistoryItem.module.css';
import PropTypes from 'prop-types';

export const TransHistoryItem = ({ type, amount, currency, id }) => {
    return (
        <tbody className={css.transString}>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    );
};

TransHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}