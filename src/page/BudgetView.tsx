import { ListExpenses } from "../components/ListExpenses"
import { ButtonAdd } from "../components/ButtonAdd"
import { useBudget } from "../hooks/useBudget"
import { Header } from "../components/Header"
import { Filter } from "../components/Filter"



export const BudgetView = () => {
    const { isValidBudget } = useBudget()
    return (
        <>
            <Header />
            {isValidBudget &&
                <>
                    <Filter />
                    <ListExpenses />
                    <ButtonAdd />
                </>
            }

        </>
    )
}
