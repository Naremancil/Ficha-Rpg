import { useState } from 'react'
import './editarFicha.css'
import ReactModal from 'react-modal'

const EditarFicha = ({ nome, fichaOriginal, isOpen, onClose }) => {
    
    const fechar = () => {
        onclose()
    }

    return (
        <ReactModal 
            isOpen={isOpen}
            onRequestClose={fechar}
            ariaHideApp={false}
            className='modal'
        >
            <section>
                <h1>OI</h1>
            </section>
            <button onClick={fechar}></button>
        </ReactModal>
    )
}

export default EditarFicha