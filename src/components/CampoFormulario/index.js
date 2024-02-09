import { useState } from 'react'
import './campoFormulario.css'

const CampoFormulario = ({ nome, tipo, valor, restante, total, requerido }) => {
    const [contador, setContador] = useState(0)
    let ret

    const soma = () => {
        if(restante === 0) return
        setContador(contador + 1)
        ret = contador + 1
        valor(ret)
        total(restante - 1)
    }

    const subtrai = () => {
        if(restante === 20) return
        else {
            if(contador <= 0) return
            setContador(contador - 1)
            ret = contador - 1
            valor(ret)
            total(restante + 1)
        }
    }

    return (
        tipo === 'texto' ?
        // Tipo Text
        <section className='textos'>
            <label>
                <input
                    type='text'
                    name='texto'
                    required={requerido}
                    onChange={evento => valor(evento.target.value)}
                    placeholder={nome}
                />
            </label>
        </section>
        :
        // Tipo Number
        <section className='atributos'>
            <div className='head'>
                <h2>{nome}</h2>
            </div>
            <div className='fields'>
                <button type="button" onClick={soma}>+</button>
                <input name='contador' value={contador} readOnly/>
                <button type="button" onClick={subtrai}>-</button>
            </div>
        </section>
    )
}

export default CampoFormulario