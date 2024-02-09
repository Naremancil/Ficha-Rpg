import Inventario from '../Inventario'
import './cardFicha.css'
import { useState } from 'react'

const CardFicha = ({ post, exclude, edit }) => {

    // Função pra Abreviar um nome comprido
    const nomeAbreviado = (nome) => {
        let firstName = nome.split(' ')
        let nomeLongo = firstName[0].substring(0,10)

        if(nomeLongo.length >= 10){ 
            if(firstName[1] === undefined) return nomeLongo + '.'
            else return (nomeLongo + ' ' + firstName[1].charAt(0).toUpperCase())
        } else {
            if(firstName[1] === undefined) return firstName[0] + '.'
            else return (firstName[0] + ' ' + firstName[1].charAt(0).toUpperCase())
        }
        
    }

    // css por ranque do personagem
    const seuRanque = (ranque) => {
        let classificacao
        
        switch(ranque){
            case 'branco':
                classificacao = 'ranque-branco'
                break

            case 'azul':
                classificacao = 'ranque-azul'
                break

            case 'verde':
                classificacao = 'ranque-verde'
                break

            case 'laranja':
                classificacao = 'ranque-laranja'
                break

            case 'vermelho':
                classificacao = 'ranque-vermelho'
                break

            default: classificacao = 'ranque-branco'
        }

        return classificacao
    }

    // definir qual o lado da carta
    const [lados, setLados] = useState(false)
    const virarCard = () => {
        setLados(!lados)
    }

    const excluirCard = () => {
        exclude(post.status.nome)
    }

    const editarCard = () => {
        edit(post.status.nome)
    }

    return (
        <section className={`card ${lados ? 'virado' : ''}`}>

            {/* Frente */}
            <section className={`card-face ${lados ? 'hidden' : ''}`}>
                
                {/* Parte de cima */}
                <section className='card-top'>

                    {/* Header */}
                    <div className="card-header">
                        <h3>{nomeAbreviado(post.status.nome)}</h3>
                        <p><span className={seuRanque(post.status.ranque)}>{post.status.ranque}</span></p>
                    </div>

                    {/* Status, vida e mana */}
                    <div className='card-status'>
                        <span className='vida'>HP: {post.status.vida}</span>
                        <span className='mana'>Mana: {post.status.mana}</span>
                    </div>

                    {/* Foto */}
                    <div className="card-image">
                        <img src={post.imagem} alt="foto-aqui!" className='imagem'></img>
                    </div>
                </section>


                {/* Parte de baixo */}
                <section className='card-botton'>
                    <div className="card-info">
                        {/* Força */}
                        <div className='atributo'>
                            <p><span className='forca'>Str: </span><span className='atributo-forca'>{post.atributos.forca}</span>+</p>
                            <p className='bonus-forca'>{post.bonus.forca}</p>
                        </div>

                        {/* Inteligência */}
                        <div className='atributo'>
                            <p><span className='inteligencia'>Int: </span><span className='atributo-inteligencia'>{post.atributos.inteligencia}</span>+ </p>
                            <p className='bonus-inteligencia'>{post.bonus.inteligencia}</p>
                        </div>

                        {/* Destreza */}
                        <div className='atributo'>
                            <p><span className='destreza'>Dex: </span><span className='atributo-destreza'>{post.atributos.destreza}</span>+ </p>
                            <p className='bonus-destreza'>{post.bonus.destreza}</p>
                        </div>

                        {/* Resistência */}
                        <div className='atributo'>
                            <p><span className='resistencia'>Res: </span><span className='atributo-resistencia'>{post.atributos.resistencia}</span>+ </p>
                            <p className='bonus-resistencia'>{post.bonus.resistencia}</p>
                        </div>

                        {/* Carisma */}
                        <div className='atributo'>
                            <p><span className='carisma'>Car: </span><span className='atributo-carisma'>{post.atributos.carisma}</span>+ </p>
                            <p className='bonus-carisma'>{post.bonus.carisma}</p>
                        </div>
                    </div>
                </section>
                

                {/* Botão de virar */}
                <div className="card-actions">
                    <button onClick={excluirCard}>excluir card</button>
                    <button onClick={virarCard}>Virar o Card</button>
                </div>
            </section>

            {/* Verso */}
            <section className={`card-face ${lados ? 'back' : 'hidden'}`}>

                <div className='card-info-back'>
                    <Inventario/>
                </div>

                {/* Botão de virar */}
                <div className="card-actions">
                    <button onClick={excluirCard}>Excluir card</button>
                    <button onClick={virarCard}>Virar o Card</button>
                </div>
            </section>
            
        </section>
    )
}

export default CardFicha