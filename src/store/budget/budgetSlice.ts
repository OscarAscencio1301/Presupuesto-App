import { createSlice } from "@reduxjs/toolkit";
import { Budget } from "../../interface/budget";

const initialState: Budget = {
    budget: 0,
    available: 0,
    spent: 0,
    porcent: 0,
    isValidBudget: false,
    isOpenModal: false,
    expenses: [],
    expensesFilter: [],
    search: '',
    expenseActive: null
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        defineBudget: (state, { payload }) => {
            state.budget = payload
            state.available = payload
            state.isValidBudget = true
        },
        changeModal: (state) => {
            state.isOpenModal = !state.isOpenModal
        },
        add: (state, { payload }) => {
            state.expenses.push(payload)
        },
        active: (state, { payload }) => {
            state.expenseActive = payload
        },
        update: (state, { payload }) => {
            state.expenses = state.expenses.map(expense => expense.id === payload.id ? payload : expense)

        },
        deleteB: (state, { payload }) => {
            state.expenses = state.expenses.filter(expense => expense.id !== payload)
            state.available += payload.cost
            state.spent -= payload.cost
        },
        clean: (state) => {
            state.expenseActive = null
        },
        calculate: (state) => {
            state.available = state.expenses.reduce((acc, element) => acc + element.cost, 0)
            state.spent = state.budget - state.available
            state.porcent = ((state.budget - state.available) / state.budget) * 100
        },
        filterExpense: (state, { payload }) => {
            state.search = payload
            state.expensesFilter = state.expenses.filter(expense => expense.category === payload)
        },
        resetValues: (state) => {
            state.budget = 0
            state.available = 0
            state.spent = 0
            state.porcent = 0
            state.isValidBudget = false
            state.isOpenModal = false
            state.expenses = []
            state.expensesFilter = []
            state.search = ''
            state.expenseActive = null
        }
    }
})

export const { defineBudget, resetValues, changeModal, add, active, update, deleteB, clean, calculate, filterExpense } = budgetSlice.actions