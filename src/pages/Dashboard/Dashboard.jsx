import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import Stats from "../../components/Stats/Stats";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionList from "../../components/TransactionList/TransactionList";

function Dashboard() {
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);

  function openTransactionForm() {
    setIsTransactionFormOpen(true);
  }

  function closeTransactionForm() {
    setIsTransactionFormOpen(false);
    setFormData(emptyForm);
  }

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("moneyflow-transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "moneyflow-transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  function handleSaveTransaction(transaction) {
    if (!editingTransaction) {
      const newTransaction = { id: crypto.randomUUID(), ...transaction };
      setTransactions((previousTransactions) => {
        const updatedTransactions = [...previousTransactions, newTransaction];

        return updatedTransactions;
      });
    } else
      setTransactions((previousTransactions) =>
        previousTransactions.map((currentTransaction) => {
          if (currentTransaction.id === editingTransaction.id) {
            return { ...transaction, id: editingTransaction.id };
          }
          return currentTransaction;
        })
      );
    setEditingTransaction(null);

    setFormData(emptyForm);
    closeTransactionForm();
  }

  function handleDeleteTransaction(id) {
    setTransactions((previousTransactions) =>
      previousTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  const emptyForm = {
    amount: "",
    category: "",
    description: "",
    date: "",
    type: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  function handleInputChange(event) {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function calculateTotalIncome() {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === "Income")
      .reduce((total, transaction) => total + Number(transaction.amount), 0);
    return totalIncome;
  }

  function calculateTotalExpense() {
    const totalExpense = transactions
      .filter((transaction) => transaction.type === "Expense")
      .reduce((total, transaction) => total + Number(transaction.amount), 0);
    return totalExpense;
  }

  function calculateTotalBalance() {
    const totalBalance = calculateTotalIncome() - calculateTotalExpense();
    return totalBalance;
  }

  const totalBalance = calculateTotalBalance();
  const totalIncome = calculateTotalIncome();
  const totalExpense = calculateTotalExpense();

  const [editingTransaction, setEditingTransaction] = useState(null);

  function handleEditTransaction(transaction) {
    setEditingTransaction(transaction);
    setFormData(transaction);
    openTransactionForm();
  }

  return (
    <>
      <Header />
      <BalanceCard
        balance={totalBalance}
        onAddTransaction={openTransactionForm}
      />
      <Stats
        totalBalance={totalBalance}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />
      {isTransactionFormOpen && (
        <TransactionForm
          formData={formData}
          onChangeInput={handleInputChange}
          onCancelTransaction={closeTransactionForm}
          onSaveTransaction={handleSaveTransaction}
        />
      )}
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
        onEditTransaction={handleEditTransaction}
      />
    </>
  );
}

export default Dashboard;
