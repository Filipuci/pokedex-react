export interface PokesObject {
  results: PokeBase[]
}

export interface PokeBase {
  name: string,
  url: string
}

export interface PokeData {
  id:number,
  name: string,
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string
      }
    }
  },
  types: {
    type: {
      name: string
    }
  }[]
}

