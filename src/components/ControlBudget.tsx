import { useEffect, useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlBudget = () => {
    const { budget, available, spent, calculateAct, expenses ,porcent, resetAct } = useBudget()

    const [formatBudget, formatavailable, formatspent] = useMemo(() => {
        return [
            budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            available.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            spent.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        ]
    }, [budget, available, spent])


    useEffect(() => {
        calculateAct()
    }, [expenses])


    return (
        <div className="bg-white container mx-auto max-w-screen-lg rounded-lg gap-4 flex-col flex justify-center items-center p-5 lg:p-10 shadow-md">
            <div className="">
                <CircularProgressbar value={porcent} text={`${porcent}% Disponible`} styles={buildStyles({
                    pathColor: Number(porcent) <= 0 ? 'red' : '#16A34A',
                    textColor: Number(porcent) <= 0 ? 'red' : '#16A34A',
                    textSize: '10px'
                })}/>;
            </div>
            <div className="flex-1 text-center">
                <p className="text-black text-2xl"><span className="text-green-600">Presupuesto: </span>{formatBudget}</p>
                <p className={`text-2xl ${available < budget ? 'text-green-600' : 'text-red-600'}`}><span>Disponible: </span>{formatavailable}</p>
                <p className={`text-2xl ${available < budget ? 'text-green-600' : 'text-red-600'}`}><span>Gastada: </span>{formatspent}</p>
                <button onClick={resetAct} className="bg-red-500 mt-3 py-2 px-5 rounded">Reset</button>
            </div>
        </div>
    )
}
