import { useBudget } from "../hooks/useBudget"
import { SingleExpense } from "./Expense"


export const ListExpenses = () => {
    const {expenses} = useBudget()
  return (
    <div className="p-10">
        <h2 className="text-4xl font-bold px-3 py-6">{expenses?.length > 0 ? 'Gastos': 'No hay Gastos'}</h2>
        {
            expenses.map(expense => <SingleExpense key={expense.id} {...expense}/>)
        }
    </div>
  )
}
