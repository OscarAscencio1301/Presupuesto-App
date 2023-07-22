import { useBudget } from "../hooks/useBudget"
import { Budget } from "./Budget"
import { ControlBudget } from "./ControlBudget"

export const Header = () => {
    const { isValidBudget } = useBudget()

    return (
        <header className="bg-green-600 p-5 flex-col gap-10 flex text-white">
            <h1 className="text-4xl text-center">Planificador de Gastos</h1>
            {!isValidBudget ? <Budget /> : <ControlBudget />}
        </header>
    )
}
