import { useContext } from "react"
import ExpensesOutput from "../cmps/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses.contect"
import { getDateMinusDays } from "../utils/date"

function RecentExpense() {
    const expensesCtx = useContext(ExpensesContext)

    const recentExpences = expensesCtx.expenses.filter((expense) => {
        const today = new Date()
        const date7daysAgo = getDateMinusDays(today , 7)

        return expense.date > date7daysAgo
    })
    return (
        <ExpensesOutput expenses={recentExpences} expensesPeriod='Last 7 days'/>
    )
}

export default RecentExpense