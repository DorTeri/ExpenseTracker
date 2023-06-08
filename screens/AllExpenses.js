import { useContext } from "react"
import ExpensesOutput from "../cmps/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses.contect"

function AllExpenses() {

    const expensesCtx = useContext(ExpensesContext)
    return (
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total'/>
    )
}

export default AllExpenses