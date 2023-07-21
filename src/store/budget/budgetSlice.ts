import { createSlice } from "@reduxjs/toolkit";
import { Budget } from "../../interface/budget";

const initialState: Budget = {
    budget: 0,
    available: 0,
    spent: 0,
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
            state.available = payload
            state.isValidBudget = true
        },
        changeModal: (state) => {
            state.isOpenModal = !state.isOpenModal
        },
        add: (state, { payload }) => {
            state.expenses.push(payload)
            state.available -=  payload.cost
            state.spent += payload.cost
        },
        active: (state, { payload }) => {
            state.expenseActive = payload
        },
        update: (state, { payload }) => {
            state.expenses = state.expenses.map(expense => expense.id === payload.id ? payload : expense)
            state.available -=  payload.cost
            state.spent += payload.cost
        },
        deleteB: (state, { payload }) => {
            state.expenses = state.expenses.filter(expense => expense.id !== payload)
            state.available +=  payload.cost
            state.spent -= payload.cost
        },
        clean: (state) => {
            state.expenseActive = null
        }
    }
})

export const { defineBudget, changeModal, add, active, update, deleteB, clean } = budgetSlice.actions