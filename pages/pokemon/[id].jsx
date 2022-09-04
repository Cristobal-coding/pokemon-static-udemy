import { useRouter } from "next/router"

import { Mainlayout } from '../../components/layouts'

const PokemonPage = () => {
    const { query } = useRouter()
    console.log(query);
    return (
        <Mainlayout title='Pokemon-'>
            <h2>Hola Mundo</h2>
        </Mainlayout>
    )
}

export default PokemonPage