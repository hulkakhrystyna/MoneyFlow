import StatCard from "../StatCard/StatCard"
import "./Stats.css"

function Stats() {
    return(
        <div className="container">
            <StatCard title="Balance" amount="£0.00" />
            <StatCard title="Income" amount="£0.00" />
            <StatCard title="Expenses" amount="£0.00" />
        </div>
    )
}

export default Stats