import "./TransactionItem.css";
import { FiTrash2 } from "react-icons/fi";

function TransactionItem({ transaction, onDeleteTransaction }) {
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
      <button
        className="delete-button"
        aria-label="Delete transaction"
        onClick={() => onDeleteTransaction(transaction.id)}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}

export default TransactionItem;
