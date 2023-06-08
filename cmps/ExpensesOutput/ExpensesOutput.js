import { View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

const EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 34.99,
        date: new Date('2023-12-05')
    },
    {
        id: 'e3',
        description: 'A book',
        amount: 19.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e4',
        description: 'Another book',
        amount: 39.99,
        date: new Date('2023-01-19')
    }
]

function ExpensesOutput({ expenses , expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={EXPENSES} />
        </View>
    )
}

export default ExpensesOutput