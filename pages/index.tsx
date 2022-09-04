import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Mainlayout } from '../components/layouts'
import { CardPoke } from '../components/ui';
import { PokemonListResp, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[],
};

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Mainlayout>
      <Grid.Container justify='center'>
        {
          pokemons.map((poke, i) => <CardPoke key={i} {...poke} />)
        }
      </Grid.Container>
    </Mainlayout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResp>('/pokemon?limit=150');

  data.results.map((poke, i) => {
    poke.id = i + 1;
    poke.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  });

  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default Home
