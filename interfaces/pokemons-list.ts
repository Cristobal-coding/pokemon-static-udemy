export interface PokemonListResp {
    count: number;
    next?: string;
    previous?: string;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    id: number;
    name: string;
    img: string;
    url: string;
}
