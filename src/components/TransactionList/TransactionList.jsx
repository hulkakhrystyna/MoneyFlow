import "./TransactionList.css";
import TransactionItem from "../TransactionItem/TransactionItem";

function TransactionList({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
}) {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={onDeleteTransaction}
            onEditTransaction={onEditTransaction}
          />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
