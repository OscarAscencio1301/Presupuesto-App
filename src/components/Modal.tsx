import imageClose from '../assets/cerrar.svg'
import { useBudget } from '../hooks/useBudget'

export const Modal = () => {

    const {isOpenModal, changeModalAct} = useBudget()

  return (
    <div className={`top-0 absolute z-10 h-screen w-screen bg-black bg-opacity-90 ${isOpenModal ? 'block' : 'hidden'}`}>
        <div className="w-10 absolute right-10 top-5 cursor-pointer" onClick={changeModalAct}>
            <img src={imageClose} alt="Close Modal" />
        </div>
    </div>
  )
}
