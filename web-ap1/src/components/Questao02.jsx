import { useEffect, useState } from "react"

const PokemonFrontBack = () => {

    // Variável de estado para controlar o estado do botão
    const [turn, setTurn] = useState(true)
    // Variável de estado para controlar a imagem do pokemon
    const [pokemon, setPokemon] = useState("")

    useEffect(() => {
        // Sempre que o estado do botão mudar, a imagem do pokemon é alterada (Frente ou Costas)
        if (turn) {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
        } else {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
        }
    }, [turn])

    return (
        <div>
            <h1>Questão 02</h1>
            <h1>Pokemon</h1>
            <img src={pokemon} alt="Pikachu" style={{width:"300px"}}/>
            {/*Sempre que o botão for clicado, o estado do botão é alterado*/}
            <button onClick={() => setTurn(!turn)}>Virar</button>
        </div>
    )

}

export default PokemonFrontBack