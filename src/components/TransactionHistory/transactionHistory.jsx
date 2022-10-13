import s from '../Transactions/Transactions.module.css'

export const TransactionHistory = ({ id, type, amount, currency }) => {
    return (
    <tr key={id}>
      <th className={s.th}>{type}</th>
      <th className={s.th}>{amount}</th>
      <th className={s.th}>{currency}</th>
    </tr>)
}