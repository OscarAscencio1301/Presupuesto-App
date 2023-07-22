import { useEffect } from "react"
import { useBudget } from "../hooks/useBudget"
import { useForm } from "../hooks/useForm"

export const Filter = () => {
  const {filterExpensesAct} = useBudget()
  const {search, changeEvent} = useForm({
    search: ''
  })

  useEffect(() => {
    filterExpensesAct(search)
  }, [search])
  
  

  return (
    <div className="shadow py-5 px-8">
      <form>
        <div className="flex items-center gap-10">
          <label className="text-3xl font-bold text-gray-700">Filtrar gastos</label>
          <select className="flex-1 p-3 border-none rounded-sm text-center" name="search" value={search} onChange={changeEvent}>
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varioa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>

          </select>
        </div>
      </form>
    </div>
  )
}
