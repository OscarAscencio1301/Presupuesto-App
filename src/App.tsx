
import { Provider } from "react-redux"
import { Header } from "./components/Header"
import { store } from "./store/store"
import { Modal } from "./components/Modal"
import { ListExpenses } from "./components/ListExpenses"


export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Modal />
      <ListExpenses />
    </Provider>
  )
}
