import './criarFicha.css'
import CampoFormulario from '../CampoFormulario'
import ReactModal from 'react-modal'
import { useState } from 'react'

const CriarFicha = ({ isOpen, onClose, ficha }) => {
    const [totalAtributos, setTotalAtributos] = useState(20)
    const [imagem, setImagem] = useState(null)

    // nome, vida, mana, exp, ranque
    const [status, setStatus] = useState({
        nome: '',
        vida: 10,
        mana: 10,
        Exp: 0,
        ranque: 'branco'
    })
    function atualizaStatus (search, evento) {
        setStatus({...status, [search]: evento})
    }
    // ---------------------------------------------------

    // força, inteligencia, destreza, resistencia, carisma
    const [atributos, setAtributos] = useState({
        forca: 0,
        inteligencia: 0,
        destreza: 0,
        resistencia: 0,
        carisma: 0,
    })
    function atualizaAtributo (search, evento){
        setAtributos({...atributos, [search]: parseInt(evento)})
        atualizaBonus(search, evento)
    }
    // ---------------------------------------------------

    // bonus dos Atributos
    const [bonus, setBonus] = useState({
        forca: 0,
        inteligencia: 0,
        destreza: 0,
        resistencia: 0,
        carisma: 0
    })
    function atualizaBonus(search, value){
        if(value%5 === 0){
            setBonus({...bonus, [search]: value/5})
        }else return
    }
    // ---------------------------------------------------

    // clean all
    function limpaTudo(){
        setStatus({
            nome: '',
            vida: 10,
            mana: 10,
            Exp: 0,
            ranque: 'branco'
        })
        setAtributos({
            forca: 0,
            inteligencia: 0,
            destreza: 0,
            resistencia: 0,
            carisma: 0,
        })
        setBonus({
            forca: 0,
            inteligencia: 0,
            destreza: 0,
            resistencia: 0,
            carisma: 0
        })
    }

    // Criação da ficha
    function preencherFicha(evento) {
        evento.preventDefault()
        ficha ({
            status,
            atributos,
            bonus,
            imagem
        })
        limpaTudo()
        setTotalAtributos(20)
        onClose()
    }

    // close modal
    function fechar(){
        limpaTudo()
        setTotalAtributos(20)
        onClose()
    }
    
    return (
        <ReactModal 
            isOpen={isOpen}
            onRequestClose={fechar}
            ariaHideApp={false}
            className='modal'
        >
            <div className='modal_conteudo'>
                <form onSubmit={preencherFicha}>
                    <h1>Nova Ficha</h1>
                    <p>total de atributos = {totalAtributos}</p>

                    <div className='texto'>
                        {/* Nome */}
                        <CampoFormulario
                            nome='Nome'
                            tipo='texto'
                            valor={e => atualizaStatus('nome', e)}
                        />

                        {/* Foto */}
                        <CampoFormulario
                            nome='Url da Imagem'
                            tipo='texto'
                            valor={e => setImagem(e)}
                            requerido={false}
                        />
                    </div>

                    <div className='atributos'>
                        {/* Força */}
                        <CampoFormulario
                            nome='força'
                            tipo='numero'
                            valor={e => atualizaAtributo('forca', e)}
                            restante = {totalAtributos}
                            total={e => setTotalAtributos(e)}
                        />

                        {/* Destreza */}
                        <CampoFormulario
                            nome='Destreza'
                            tipo='numero'
                            valor={e => atualizaAtributo('destreza', e)}
                            restante = {totalAtributos} 
                            total = {e => setTotalAtributos(e)}
                        />

                        {/* Inteligência */}
                        <CampoFormulario
                            nome='Inteligência'
                            tipo='numero'
                            valor={e => atualizaAtributo('inteligencia', e)}
                            restante = {totalAtributos}
                            total={e => setTotalAtributos(e)}
                        />

                        {/* Resistência */}
                        <CampoFormulario
                            nome='Resistência'
                            tipo='numero'
                            valor={e => atualizaAtributo('resistencia', e)}
                            restante = {totalAtributos}
                            total={e => setTotalAtributos(e)}
                        />

                        {/* Carisma */}
                        <CampoFormulario
                            nome='Carisma'
                            tipo='numero'
                            valor={e => atualizaAtributo('carisma', e)}
                            restante = {totalAtributos}
                            total={e => setTotalAtributos(e)}
                        />
                    </div>
                    <button className='modal_button'>Criar Ficha</button>
                </form>
                <button type='button' onClick={fechar} className='modal_button'>Fechar</button>
            </div>
        </ReactModal>
    )
}

export default CriarFicha