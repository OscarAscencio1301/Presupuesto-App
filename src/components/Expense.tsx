import { Expense } from "../interface/budget"


export const SingleExpense = ({category, cost, expense, id}:Expense) => {
  return (
    <div className="shadow flex justify-between gap-5 mb-5 p-5">
        <div className="text-3xl text-black font-bold">
            <div className="mb-1">
                <p className="text-gray-500 text-xl uppercase">{category}</p>
                <p className="text-gray-800 text-2xl">{expense}</p>
            </div>
        </div>
    </div>
  )
}
