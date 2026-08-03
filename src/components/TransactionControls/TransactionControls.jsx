import "./TransactionControls.css";

function TransactionControls({
  transactionFilters,
  handleFilterChange,
  resetFilters,
  availableMonths,
  formatMonthLabel,
}) {
  return (
    <div>
      <div>
        <label>Search transaction</label>
        <input
          type="text"
          name="searchTerm"
          value={transactionFilters.searchTerm}
          placeholder="Search..."
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <label>Type</label>
        <select
          name="filterType"
          autoComplete="off"
          value={transactionFilters.filterType}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div>
        <label>Date</label>
        <select
          name="month"
          value={transactionFilters.month}
          onChange={handleFilterChange}
        >
          <option value="">All month</option>
          {availableMonths.map((month) => (
            <option key={month} value={month}>
              {formatMonthLabel(month)}
            </option>
          ))}
        </select>
      </div>
      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}

export default TransactionControls;
