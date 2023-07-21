import { useDispatch, useSelector } from "react-redux"
import { Budget, Expense, Slice } from "../interface/budget"
import { active, add, changeModal, clean, defineBudget, deleteB, update } from "../store/budget/budgetSlice"


export const useBudget = () => {
    const { expenses, expenseActive, budget, isValidBudget, isOpenModal } = useSelector<Slice, Budget>(state => state.budget)
    const dispatch = useDispatch()


    const defineBudgetAct = (budget: number) => {
        dispatch(defineBudget(budget))
    }
    const changeModalAct = () => {
        dispatch(changeModal())
    }

    const addExpenseAct = (expense: Expense) => {
        dispatch(add(expense))
    }
    const activeExpenseAct = (expense: Expense) => {
        dispatch(active(expense))
    }
    const updateExpenseAct = (expense: Expense) => {
        dispatch(update(expense))
    }
    const deleteExpenseAct = (id: number) => {
        dispatch(deleteB(id))
    }
    const cleanExpenseAct = () => {
        dispatch(clean())
    }


    return {
        expenses,
        expenseActive,
        budget,
        isOpenModal,
        isValidBudget,
        defineBudgetAct,
        changeModalAct,
        addExpenseAct,
        activeExpenseAct,
        updateExpenseAct,
        deleteExpenseAct,
        cleanExpenseAct
    }
}
