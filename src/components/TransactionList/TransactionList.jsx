import "./TransactionList.css"
import TransactionItem from "../TransactionItem/TransactionItem"

function TransactionList({transactions}) {
    return (
        <div>
            <h2>Recent Transactions</h2>
            <div className="transaction-list">
                {transactions.map((transaction) => (
                    <TransactionItem transaction={transaction} />
                ))}
            </div>
        </div>
    )
}

export default TransactionList