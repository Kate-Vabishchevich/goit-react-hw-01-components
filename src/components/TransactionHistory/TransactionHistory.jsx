import { TransHistoryItem } from './TransHistoryItem/TransHistoryItem';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table classNsme={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
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
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};