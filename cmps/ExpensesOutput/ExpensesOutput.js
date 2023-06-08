import { StyleSheet, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

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
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 34.99,
        date: new Date('2023-12-05')
    },
    {
        id: 'e7',
        description: 'A book',
        amount: 19.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e8',
        description: 'Another book',
        amount: 39.99,
        date: new Date('2023-01-19')
    }
]

function ExpensesOutput({ expenses , expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={EXPENSES} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})

export default ExpensesOutput