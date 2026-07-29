import StatCard from "../StatCard/StatCard";
import "./Stats.css";

function Stats({ totalBalance, totalIncome, totalExpense }) {
  return (
    <div className="container">
      <StatCard title="Balance" amount={totalBalance} />
      <StatCard title="Income" amount={totalIncome} />
      <StatCard title="Expenses" amount={totalExpense} />
    </div>
  );
}

export default Stats;
