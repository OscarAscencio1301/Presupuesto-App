import { useBudget } from "../hooks/useBudget"
import { SingleExpense } from "./Expense"


export const ListExpenses = () => {
  const { expenses, search, expensesFilter } = useBudget()



  return (
    <div className="p-5">
      <h2 className="text-4xl font-bold px-3 py-6">{expenses?.length > 0 ? 'Gastos' : 'No hay Gastos'}</h2>
      {
        search
          ?
          expensesFilter?.map(expense => <SingleExpense key={expense.id} {...expense} />)
          :
          expenses?.map(expense => <SingleExpense key={expense.id} {...expense} />)
      }
    </div>
  )
}
