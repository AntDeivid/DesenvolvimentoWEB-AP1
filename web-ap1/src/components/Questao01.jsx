const { useEffect, useState } = require("react")

function Questao01X() {

    // Variável que armazena as medias dos alunos vindas do componente Questao01Y
    const [medias, setMedias] = useState([])

    // Função que recebe as medias dos alunos do componente Questao01Y
    function messageToY(medias) {
        setMedias(medias)
    }

    const alunos = [
        {nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4}},
        {nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5}},
        {nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2}},
        {nome: "Deivid", notas: {ap1: 10.0, ap2: 10.0}}
    ]

    return (
        <div>
            <h1>Questão 01</h1>
            <Questao01Y alunos={alunos} funcaoDePassagem={messageToY}/>
            <h2>Aprovados com média maior ou igual a 7</h2>
            {medias.map( // Aqui é realizado um map para imprimir apenas os alunos com média maior ou igual a 7
                (media) => {
                    return media.media >= 7 ? <p>{media.nome}</p> : null
                }
            )}
        </div>
    )
}

const Questao01Y = ({alunos, funcaoDePassagem}) => {

    // Variável que armazena as medias dos alunos para passar para o componente Questao01X
    const [medias, setMedias] = useState([])

    useEffect(() => {
        // Aqui é realizado um map para calcular a média de cada aluno
        // após isso, é criado um objeto com o nome e a média do aluno
        // e esse objeto é adicionado ao array de medias
        const medias = alunos.map((aluno) => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2
            return {nome: aluno.nome, media}
        })
        setMedias(medias)
    }, [alunos])

    // Função que passa as medias dos alunos para o componente Questao01X
    function messageToX(medias) {
        funcaoDePassagem(medias)
    }

    return (
        <div>
            {messageToX(medias)}
        </div>
    )

}

export default Questao01X