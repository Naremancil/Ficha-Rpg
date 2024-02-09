import { useState } from 'react'
import './slot.css'
import ReactModal from 'react-modal'

const SlotInventario = () => {
    const [modal, setModal] = useState(false)
    const abrirModal = () => {
        setModal(true)
    }
      const fecharModal = () => {
        setModal(false)
    }
    
    return (
        <section className='slot'>
            <button onClick={abrirModal}></button>
            <ReactModal
                isOpen={modal}
                onRequestClose={fecharModal}
                ariaHideApp={false}
                className='modal-inventario'
            >
                <h3>Inventario</h3>
                <button onClick={fecharModal}>Fechar</button>
            </ReactModal>
        </section>
    )
}

export default SlotInventario