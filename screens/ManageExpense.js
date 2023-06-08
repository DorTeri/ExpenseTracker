import { useLayoutEffect } from "react"
import { StyleSheet, View } from "react-native"
import IconButton from "../cmps/UI/IconButton"
import { GlobalStyles } from "../constants/styles"
import Button from "../cmps/UI/Button"

function ManageExpense({ route, navigation }) {

    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    function onRemoveExpense() {
        navigation.goBack()
    }

    function onCancel() {
        navigation.goBack()
    }

    function onConfirm() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={onConfirm}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
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