import "./BalanceCard.css"

function BalanceCard({balance, onAddTransaction}) {
    return (
        <div className="balance-card">
            <h2 className="balance-title">Current Balance</h2>
            <p className="balance-amount">{balance}</p>
            <p className="balance-update">Updated just now</p>
            <button className="btn btn-primary" onClick={onAddTransaction}>+ Add Transaction</button>
        </div>
    )
}

export default BalanceCard