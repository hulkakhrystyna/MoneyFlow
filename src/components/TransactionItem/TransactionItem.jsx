import "./TransactionItem.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function TransactionItem({
  transaction,
  onDeleteTransaction,
  onEditTransaction,
}) {
  const categoryIcons = {
    Food: "🍔",
    Shopping: "🛍",
    Transport: "🚗",
    Salary: "💰",
    Entertainment: "🎮",
    Bills: "📄",
  };

  return (
    <div className="transaction-item">
      <p className={transaction.type === "Income" ? "income" : "expense"}>
        {" "}
        {transaction.type === "Income" ? "+" : "-"}£{transaction.amount}
      </p>
      <p>
        {categoryIcons[transaction.category]}
        {transaction.category}
      </p>
      <p>{transaction.date}</p>
      <div className="transaction-actions-btn">
        <button
          className="delete-button"
          aria-label="Delete transaction"
          onClick={() => onDeleteTransaction(transaction.id)}
        >
          <FiTrash2 size={18} />
        </button>
        <button
          className="edit-button"
          aria-label="Edit transaction"
          onClick={() => onEditTransaction(transaction)}
        >
          <FiEdit2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
