import "./StatCard.css"

function StatCard({title, amount}) {
    return (
        <div className="stat-card">
           <h2 className="stat-title">{title}</h2>
           <p className="stat-amount">{amount}</p> 
        </div>
    )
}

export default StatCard