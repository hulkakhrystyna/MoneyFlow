import "./TransactionItem.css"

function TransactionItem({transaction}) {

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
            <p className={transaction.type === "Income" ? "income" : "expense"}> {transaction.type === "Income" ? "+" : "-"}£{transaction.amount}</p>
            <p>{categoryIcons[transaction.category]}{transaction.category}</p>
            <p>{transaction.date}</p>
        </div>
    )
}

export default TransactionItem