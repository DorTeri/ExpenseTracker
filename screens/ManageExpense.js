import { useLayoutEffect } from "react"
import { StyleSheet, View } from "react-native"
import IconButton from "../cmps/UI/IconButton"
import { GlobalStyles } from "../constants/styles"

function ManageExpense({ route, navigation }) {

    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    function onRemoveExpense() {

    }

    return (
        <View style={styles.container}>
            
            {isEditing &&
                <View style={styles.removeContainer}>
                    <IconButton icon='trash'
                        color={GlobalStyles.colors.error500} size={36}
                        onPress={onRemoveExpense} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    removeContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})

export default ManageExpense