import { useMemo } from "react"
import { LeadingActions, SwipeableList, SwipeAction, SwipeableListItem, TrailingActions } from "react-swipeable-list"
import { Expense } from "../interface/budget"
import { convertDate } from '../helpers/ConvertDate'
import imageBudget from '../assets/icono_ahorro.svg'
import imageHouse from '../assets/icono_casa.svg'
import imageFoot from '../assets/icono_comida.svg'
import imageExpense from '../assets/icono_gastos.svg'
import imageHospital from '../assets/icono_salud.svg'
import imageSubs from '../assets/icono_suscripciones.svg'
import imageOcio from '../assets/icono_ocio.svg'
import "react-swipeable-list/dist/styles.css"
import { useBudget } from "../hooks/useBudget"

interface Icons {
    [key: string]: string;
}

const icons: Icons = {
    ahorro: imageBudget,
    comida: imageFoot,
    casa: imageHouse,
    gastos: imageExpense,
    ocio: imageOcio,
    salud: imageHospital,
    subscripciones: imageSubs
}

export const SingleExpense = ({ category, cost, expense, id }: Expense) => {

    const date = useMemo(() => convertDate(Number(id)), [id])
    const { deleteExpenseAct, activeExpenseAct, changeModalAct } = useBudget()

    const functionLeft = () => (
        <LeadingActions>
            <SwipeAction onClick={() => {
                changeModalAct()
                activeExpenseAct({ category, cost, expense, id })
            }}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const functionRight = () => (
        <TrailingActions>
            <SwipeAction onClick={() => deleteExpenseAct(id || 0)}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={functionLeft()}
                trailingActions={functionRight()}
            >
                <div className="shadow flex-1 flex items-center justify-between gap-5 mb-5 p-5">
                    <img src={icons[category]} alt="Category Image" className="w-20" />
                    <div className="text-3xl text-black font-bold">
                        <div className="mb-1">
                            <p className="text-gray-500 text-xl uppercase">{category}</p>
                            <p className="text-gray-800 text-2xl">{expense}</p>
                            <p className="text-lg text-gray-700">{date}</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-2xl text-black font-bold">${cost}</p>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
