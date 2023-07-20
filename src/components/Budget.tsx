import { ChangeEvent, FormEvent, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export const Budget = () => {
    const { defineBudgetAct } = useBudget()
    const [budgetPrev, setbudgetPrev] = useState(0)

    const handleBudgetChange = ({target:{value}}: ChangeEvent<HTMLInputElement>) => {
        const inputBudget = value;
        setbudgetPrev(Number(inputBudget));
    };


    const sendBudget = (e: FormEvent) => {
        e.preventDefault()
        if (isNaN(budgetPrev) || budgetPrev <= 0) return
        defineBudgetAct(Number(budgetPrev))
    }




    return (
        <form className="bg-white container mx-auto max-w-screen-lg rounded-lg gap-4 flex-col flex justify-center p-5 lg:p-10 shadow-md" onSubmit={sendBudget}>
            <h3 className="text-green-700 text-3xl font-medium text-center">Definir Presupuesto</h3>
            <input
                type="number"
                name="budget"
                placeholder="Añade tu presupuesto"
                className="text-xl border p-2 text-black outline-none placeholder:text-center"
                value={budgetPrev}
                onChange={handleBudgetChange} // Utilizamos la función handleBudgetChange
            />
            <button type="submit" className="bg-green-700 py-2 px-10 rounded-md hover:bg-green-900">Presupuesto</button>
        </form>
    )
}
