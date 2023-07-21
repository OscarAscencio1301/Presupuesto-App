import { useBudget } from "../hooks/useBudget"
import { Budget } from "./Budget"
import { ControlBudget } from "./ControlBudget"
import imageBudgetNew from '../assets/nuevo-gasto.svg'

export const Header = () => {

    const { isValidBudget, changeModalAct } = useBudget()


    return (
        <>
            <header className="bg-green-600 p-5 flex-col gap-10 flex text-white">
                <h1 className="text-4xl text-center">Planificador de Gastos</h1>
                {!isValidBudget ? <Budget /> : <ControlBudget />}
            </header>
            {isValidBudget &&
                <div className="fixed bottom-1 right-1 w-16 max-w-md m-3 cursor-pointer" onClick={changeModalAct}>
                    <img src={imageBudgetNew} alt="New Budget" />
                </div>
            }
        </>

    )
}
