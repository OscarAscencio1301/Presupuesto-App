
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Modal } from "./components/Modal"
import { BudgetView } from "./page/BudgetView"



export const App = () => {
  return (
    <Provider store={store}>
      <BudgetView />
      <Modal />
    </Provider>
  )
}
