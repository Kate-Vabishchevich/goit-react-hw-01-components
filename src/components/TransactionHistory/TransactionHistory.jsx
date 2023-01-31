import { TransHistoryItem } from './TransHistoryItem/TransHistoryItem';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transHistory}>
            <thead className={css.transHead}>
                <tr>
                    <th className={css.transHead}>Type</th>
                    <th className={css.transHead}>Amount</th>
                    <th className={css.transHead}>Currency</th>
                </tr>
            </thead>
            {items.map(({ type, amount, currency, id }) => {
                return (
                    <TransHistoryItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                        id={id} />
                );
            })}
        </table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};