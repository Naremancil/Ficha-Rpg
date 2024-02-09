import './App.css'
import { useState } from 'react'
import CriarFicha from './components/CriarFicha'
import CardFicha from './components/CardFicha'
import EditarFicha from './components/EditarFicha'

function App() {
  const [ficha, setFicha] = useState([])
  const [modal, setModal] = useState(false)

    const abrirModal = () => {
      setModal(true)
    }
    const fecharModal = () => {
      setModal(false)
    }
    const limparFichas = () => {
      setFicha([])
    }
    const excluirFicha = (nome) => {
      const novoArray = ficha.filter(array => array.status.nome !== nome)
      setFicha(novoArray)
    }
    const mostrarFichas = () => {
      console.log(ficha)
    }

  return (
    <div className='app'>
      <h1>Criador de ficha de RPG</h1>
      <button onClick={abrirModal}>Criar Ficha!</button>

      {/* Criar uma ficha nova */}
      <div className='modal_ficha'></div>
      <CriarFicha 
        isOpen={modal} 
        onClose={fecharModal} 
        ficha={novaFicha => setFicha([...ficha, novaFicha])}  
      />

      <div className='display-fichas'>
        {/* Postagem das fichas */}
        {ficha.map((infos, index) => <CardFicha 
                                        key={index} 
                                        post={infos} 
                                        exclude={(e => excluirFicha(e))}
                                      />
                  )}
      </div>

      <button onClick={limparFichas}>Limpar Fichas</button>
      <button onClick={mostrarFichas}>Mostrar Fichas</button>
    </div>
  )
}

export default App;