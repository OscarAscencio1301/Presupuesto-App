import { FormEvent, useEffect } from 'react'
import imageClose from '../assets/cerrar.svg'
import { useBudget } from '../hooks/useBudget'
import { useForm } from '../hooks/useForm'
import { Expense } from '../interface/budget'

const initialState: Expense = {
    expense: '',
    cost: 0,
    category: ''
}

export const Modal = () => {

    const { isOpenModal, changeModalAct, addExpenseAct, expenseActive, updateExpenseAct,cleanExpenseAct } = useBudget()
    const { form, expense, cost, category, changeEvent, reset, setform } = useForm(initialState)

    const sendForm = (e: FormEvent) => {
        e.preventDefault()
        if ([expense, category, cost].includes('')) return
        if (expenseActive) {
            updateExpenseAct({ ...form, cost: Number(cost) })
        } else {
            addExpenseAct({ id: Date.now(), ...form, cost: Number(cost) })
        }
        changeModalAct()
        cleanExpenseAct()
        reset()
    }
    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
            cleanExpenseAct()
        }
    }, [isOpenModal])

    useEffect(() => {
        if (expenseActive) {
            setform(expenseActive)
        } else {
            setform(initialState)
        }
    }, [expenseActive])



    return (
        <div className={`flex justify-center items-center top-0 absolute z-10 h-screen w-screen bg-black bg-opacity-90 ${isOpenModal ? 'block' : 'hidden'}`}>
            <div className="w-10 absolute right-3 top-5 cursor-pointer" onClick={changeModalAct}>
                <img src={imageClose} alt="Close Modal" />
            </div>
            <form className='flex flex-col w-[400px] p-5 gap-10 justify-center h-screen' onSubmit={sendForm} aria-label='form'>
                <legend>Nuevo Gasto</legend>
                <div className="text-white flex flex-col gap-2 ">
                    <label htmlFor="" className='text-3xl'>Nombre Gasto</label>
                    <input aria-label='expense' type="text" placeholder='Añade nombre al gasto' className='bg-white border rounded p-2 text-black'
                        name="expense" value={expense} onChange={changeEvent}
                    />
                </div>
                <div className="text-white flex flex-col gap-2 ">
                    <label htmlFor="" className='text-3xl'>Gasto</label>
                    <input aria-label='cost' type="number" placeholder='Añade el gasto' className='bg-white border rounded p-2 text-black'
                        name="cost" value={cost} onChange={changeEvent} />
                </div>
                <div className="text-white flex flex-col gap-2 ">
                    <label htmlFor="" className='text-3xl'>Categoría</label>
                    <select aria-label='category' className='bg-white border rounded p-2 text-black' name="category" value={category} onChange={changeEvent}>
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
                <button type="submit" className='bg-green-700 text-white p-2 rounded-sm hover:bg-green-900'>Agregar gasto</button>
            </form>
        </div>
    )
}
