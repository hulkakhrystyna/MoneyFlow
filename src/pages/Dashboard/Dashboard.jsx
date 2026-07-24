import { useState } from "react"
import Header from "../../components/Header/Header"
import BalanceCard from "../../components/BalanceCard/BalanceCard"
import Stats from "../../components/Stats/Stats"
import TransactionForm from "../../components/TransactionForm/TransactionForm"
import TransactionList from "../../components/TransactionList/TransactionList"

function Dashboard() {
    const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);

    function openTransactionForm() {
        setIsTransactionFormOpen(true);
    }

    function closeTransactionForm() {
        setIsTransactionFormOpen(false)
    }

    const [transactions, setTransactions] = useState([])

    function handleSaveTransaction(transaction) {
        setTransactions((previousTransactions) => {
            const updatedTransactions = [
                ...previousTransactions,
                transaction
            ];
    
            console.log(updatedTransactions);
    
            return updatedTransactions;
        });
    

        setFormData(emptyForm)
        closeTransactionForm()
    }

    const emptyForm = {
        amount: "",
        category: "",
        description: "",
        date: "",
        type: ""
    };

    const [formData, setFormData] = useState(emptyForm)

    function handleInputChange(event) {
        setFormData((previousFormData) => ({
            ...previousFormData,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <>
            <Header />
            <BalanceCard balance="£0.00" onAddTransaction={openTransactionForm}/>
            <Stats />
            {isTransactionFormOpen && <TransactionForm formData={formData} onChangeInput={handleInputChange} onCancelTransaction={closeTransactionForm} onSaveTransaction={handleSaveTransaction}/>}
            <TransactionList transactions={transactions}/>
        </>
    )
}

export default Dashboard