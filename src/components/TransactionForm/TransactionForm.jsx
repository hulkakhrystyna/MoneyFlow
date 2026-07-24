import "./TransactionForm.css"

function TransactionForm({formData, onChangeInput, onCancelTransaction, onSaveTransaction}) {
    return (
        <div className="modal-overlay">
            <div className="transaction-form">
                <h2>Add Transaction</h2>
                <div className="transaction-inputs">
                    <div className="transaction-input-group">
                        <label>Amount</label>
                        <input className="transaction-input" autoComplete="off" type="number" name="amount" value={formData.amount} onChange={onChangeInput}/>
                    </div>
                    <div className="transaction-input-group">
                        <label>Category</label>
                        <input className="transaction-input" autoComplete="off" type="text" name="category" value={formData.category} onChange={onChangeInput} />
                    </div>
                    <div className="transaction-input-group">
                        <label>Description</label>
                        <input className="transaction-input" autoComplete="off" type="text" name="description" value={formData.description} onChange={onChangeInput}/>
                    </div>
                    <div className="transaction-input-group">
                        <label>Date</label>
                        <input className="transaction-input" autoComplete="off" type="date" name="date" value={formData.date} onChange={onChangeInput} />
                    </div>
                    <div className="transaction-input-group">
                        <label>Type</label>
                        <div className="transaction-radio-input">
                            <label>
                                <input type="radio" name="type" value="Income" checked={formData.type === "Income"} onChange={onChangeInput}/>
                                Income
                            </label>
                            <label>
                                <input type="radio" name="type" value="Expense" checked={formData.type === "Expense"}  onChange={onChangeInput}/>
                                Expense
                            </label>
                        </div>
                    </div>
                </div>
                <div className="transaction-form-actions">
                    <button className="btn btn-secondary" onClick={onCancelTransaction}>Cancel</button>
                    <button className="btn btn-primary" onClick={() => onSaveTransaction(formData)}>+ Save Transaction</button>
                </div>
            </div>
        </div>
    );
}

export default TransactionForm;