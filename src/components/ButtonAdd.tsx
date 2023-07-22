import { useBudget } from "../hooks/useBudget"
import imageBudgetNew from '../assets/nuevo-gasto.svg'

export const ButtonAdd = () => {
    const { changeModalAct } = useBudget()
    return (
        <div className="fixed bottom-1 right-1 w-16 max-w-md m-3 cursor-pointer" onClick={changeModalAct}>
            <img src={imageBudgetNew} alt="New Budget" />
        </div>
    )
}
