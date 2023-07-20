import { createSlice } from "@reduxjs/toolkit";
import { Budget } from "../../interface/budget";

const initialState: Budget = {
    budget: 0,
    isValidBudget: false,
    isOpenModal: false,
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
        }
    }
})

export const { defineBudget, changeModal } = budgetSlice.actions