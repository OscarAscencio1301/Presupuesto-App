import { useDispatch, useSelector } from "react-redux"
import { Budget, Expense, Slice } from "../interface/budget"
import { active, add, calculate, changeModal, clean, defineBudget, deleteB, filterExpense, resetValues, update } from "../store/budget/budgetSlice"


export const useBudget = () => {
    const { expenses, expenseActive, search, expensesFilter, budget, available, spent, porcent, isValidBudget, isOpenModal } = useSelector<Slice, Budget>(state => state.budget)
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

    const calculateAct = () => {
        dispatch(calculate())
    }

    const filterExpensesAct = (category:string) => {
        dispatch(filterExpense(category))
    }

    const resetAct = () => {
        dispatch(resetValues())
    }

    return {
        expenses,
        expenseActive,
        expensesFilter,
        search,
        porcent,
        available,
        spent,
        budget,
        isOpenModal,
        isValidBudget,
        defineBudgetAct,
        changeModalAct,
        addExpenseAct,
        activeExpenseAct,
        updateExpenseAct,
        deleteExpenseAct,
        cleanExpenseAct,
        calculateAct,
        filterExpensesAct,
        resetAct
    }
}
