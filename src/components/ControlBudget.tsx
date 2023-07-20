import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

export const ControlBudget = () => {
 const {budget} = useBudget()

 const formatBudget = useMemo(() => {
    return budget.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
 }, [budget])

    return (
        <div className="bg-white container mx-auto max-w-screen-lg rounded-lg gap-4 flex-col lg:flex-row flex justify-center p-5 lg:p-10 shadow-md">
            <div className="grafica">
                <p>Gráfica</p>
            </div>
            <div className="content">
                <p className="text-black"><span>Presupuesto: </span>{formatBudget}</p>
                <p className="text-black"><span>Disponible: </span>{formatBudget}</p>
                <p className="text-black"><span>Gastada: </span>{formatBudget}</p>
            </div>
        </div>
    )
}
