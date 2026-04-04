import { useEffect, useState } from "react"
import { Card } from "./components/Card"
import { usePokeData } from "./utils/queries"
import type { PokeBase } from "./types/PokeBase"

const App = () => {
  const limit = 12
  const [offset, setOffset] = useState(0)
  const { data, isLoading } = usePokeData(limit, offset)
  const [pokeList, setPokeList] = useState<PokeBase[]>([])

  useEffect(() => {
    if (!data) return
    setPokeList(prev => [...prev, ...data])
  }, [data])

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 items-center w-2/3 mx-auto">
        {pokeList?.map(item => (
          <Card key={item.name} baseObject={item} />
        ))}
      </div>

      <button
        onClick={() => setOffset(prev => prev + limit)}
        className="border border-white w-1/8 rounded-md py-2 my-5
       cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
      >
        Carregar mais pokemons...
      </button>
    </div>
  )
}


export default App