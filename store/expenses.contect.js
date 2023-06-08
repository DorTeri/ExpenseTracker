import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {

    },
    removeExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = newDate().toString() + Math.random().toString()
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updateExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updatedExpense = state[updateExpenseIndex]
            const updatedItem = { ...updatedExpense, ...action.payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[updateExpenseIndex] = updatedItem
            return updatedExpenses
        case 'REMOVE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state
    }
}

function ExpensesContextProvider({ children }) {

    const [expensesState, dispatch] = useReducer(expensesReducer, EXPENSES)

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    function removeExpense(id) {
        dispatch({ type: 'REMOVE', payload: id })
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        removeExpense: removeExpense,
        updateExpense: updateExpense
    }

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider