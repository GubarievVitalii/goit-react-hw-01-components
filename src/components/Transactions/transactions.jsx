import s from './Transactions.module.css'
import { TransactionHistory } from '../TransactionHistory/transactionHistory'

export const Transactions = ({ items }) => {
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
                    <TransactionHistory
                        type={type}
                        amount={amount}
                        currency={currency}
                        key={id} />
                ))}
            </tbody>
        </table>)
}