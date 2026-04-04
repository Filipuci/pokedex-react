export type PokeType = {
  name: string,
  id: number,
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