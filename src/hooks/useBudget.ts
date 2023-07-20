import { useDispatch, useSelector } from "react-redux"
import { Budget, Slice } from "../interface/budget"
import { changeModal, defineBudget } from "../store/budget/budgetSlice"


export const useBudget = () => {
    const { budget, isValidBudget, isOpenModal } = useSelector<Slice, Budget>(state => state.budget)
    const dispatch = useDispatch()


    const defineBudgetAct = (budget: number) => {
        dispatch(defineBudget(budget))
    }
    const changeModalAct = () => {
        dispatch(changeModal())
    }


    return {
        budget,
        isOpenModal,
        isValidBudget,
        defineBudgetAct,
        changeModalAct
    }
}
