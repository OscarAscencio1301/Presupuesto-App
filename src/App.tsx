
import { Provider } from "react-redux"
import { Header } from "./components/Header"
import { store } from "./store/store"


export const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  )
}
