import { useContext } from "react"
import ExpensesOutput from "../cmps/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses.contect"

function RecentExpense() {
    const expensesCtx = useContext(ExpensesContext)

    const recentExpences = expensesCtx.expenses.filter((expense) => {
        const today = new Date()
        
    })
    return (
        <ExpensesOutput expensesPeriod='Last 7 days'/>
    )
}

export default RecentExpense