import "./StatCard.css"

function StatCard({title, amount}) {
    return (
        <div className="card">
           <h2>{title}</h2>
           <p>{amount}</p> 
        </div>
    )
}

export default StatCard