import { useEffect, useState } from "react"
import { api } from "./services/api"
import type { PokeBase, PokesObject } from "./types/types"
import { Card } from "./components/Cards/Card"

function App() {
  const [pokesBase, setPokesBase] = useState<PokeBase[] | null>(null)

  useEffect(() => {
    const getPokesBase = async () => {
      const { data: { results } } = await api.get<PokesObject>('pokemon?limit=151&offset=0')
      setPokesBase(results)
    }

    getPokesBase()
  }, [])

  return (
    <div className="grid grid-cols-4 items-center w-2/3 mx-auto">
      {pokesBase && pokesBase.map((detail) => (
        <Card key={detail.name} baseObject={detail} />
      ))}
    </div>
  )
}

export default App
