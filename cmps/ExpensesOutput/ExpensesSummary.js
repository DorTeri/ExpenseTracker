import { StyleSheet, Text, View } from "react-native"

function ExpensesSummary({ expenses, periodName }) {

    const expensesSum = expenses.reduce((acc, expense) => {
        return acc + expense.amount
    } , 0)

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>$ {expensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ExpensesSummary