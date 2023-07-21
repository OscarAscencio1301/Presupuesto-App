import { createSlice } from "@reduxjs/toolkit";
import { Budget } from "../../interface/budget";

const initialState: Budget = {
    budget: 0,
    isValidBudget: false,
    isOpenModal: false,
    expenses: [],
    expenseActive: null
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        defineBudget: (state, { payload }) => {
            state.budget = payload
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
        },
        clean: (state) => {
            state.expenseActive = null
        }
    }
})

export const { defineBudget, changeModal, add, active, update, deleteB, clean } = budgetSlice.actions