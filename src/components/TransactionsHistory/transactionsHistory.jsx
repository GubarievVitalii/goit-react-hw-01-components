import s from './transactionsHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionsHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th className={s.th}>Type</th>
                    <th className={s.th}>Amount</th>
                    <th className={s.th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <th className={s.th}>{type}</th>
                    <th className={s.th}>{amount}</th>
                    <th className={s.th}>{currency}</th>
                </tr>))}
            </tbody>
        </table>)
}

TransactionsHistory.propTypes = {
  items: PropTypes.object.isRequired,
}