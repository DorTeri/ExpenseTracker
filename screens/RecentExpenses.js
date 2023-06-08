import ExpensesOutput from "../cmps/ExpensesOutput/ExpensesOutput"

function RecentExpense() {
    return (
        <ExpensesOutput expensesPeriod='Last 7 days'/>
    )
}

export default RecentExpense