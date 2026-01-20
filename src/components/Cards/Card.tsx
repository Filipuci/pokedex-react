import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { PokeBase, PokeData } from "../../types/types";
import { capitalization } from "../../utils/capitalization";
import { padding } from "../../utils/padding";

interface CardProps {
  baseObject: PokeBase
}

export function Card({ baseObject }: CardProps) {

  const [nameColor, setNameColor] = useState('white')
  const [pokeData, setPokeData] = useState<PokeData | null>(null)

  useEffect(() => {
    const getPokeData = async () => {
      const { data } = await api.get<PokeData>(`/pokemon/${baseObject.name}`)
      setPokeData(data)
    }

    getPokeData()
  }, [])

  const handleSetNameColor = () => {
    if (pokeData)
      setNameColor(() => {
        return getTypeBg(pokeData.types[0].type.name).slice(4, 11)
      })
  }

  const handleResetColor = () => {
    if (pokeData)
      setNameColor('white')
  }

  return (
    <>
      {pokeData &&
        <div className="bg-[#18191d] p-4 rounded-sm mr-16 w-60 justify-self-center my-4 border-3 border-[#5e5e5e]">
          <div className="bg-linear-to-b from-[#1B1E25] to-[#2f343f] rounded-sm">
            <img
              className="w-50 mx-auto transition duration-300 hover:scale-90 cursor-pointer"
              src={pokeData.sprites.other["official-artwork"].front_default}
              alt={pokeData.name} onMouseEnter={handleSetNameColor} onMouseLeave={handleResetColor}
            />
          </div>

          <p className="mt-2 text-gray-500 font-bold">N° {padding(pokeData.id)}</p>
          <p style={{ color: nameColor }} className={`font-bold mb-2 transition duration-700`}>{capitalization(pokeData.name)}</p>
          <div className="flex gap-1.75">
            <div
              className={`${getTypeBg(pokeData.types[0].type.name)} px-3 rounded-sm text-white font-bold cursor-pointer transition duration-300 hover:scale-105`}
            >
              {capitalization(pokeData.types[0].type.name)}
            </div>
            {pokeData.types[1] &&
              <div className={`${getTypeBg(pokeData.types[1].type.name)} px-3 rounded-sm text-white font-bold cursor-pointer transition duration-300 hover:scale-105`}>
                {capitalization(pokeData.types[1].type.name)}
              </div>
            }
          </div>
        </div>
      }
    </>
  )
}

const getTypeBg = (type: string) => {
  switch (type) {
    case 'grass':
      return 'bg-[#9bcc50] hover:bg-[#88b347]';

    case 'poison':
      return 'bg-[#b97fc9] hover:bg-[#a06fad]';

    case 'fire':
      return 'bg-[#fd7d24] hover:bg-[#df6f1f]';

    case 'water':
      return 'bg-[#4592c4] hover:bg-[#3c7da8]';

    case 'bug':
      return 'bg-[#729f3f] hover:bg-[#618635]';

    case 'normal':
      return 'bg-[#a4acaf] hover:bg-[#8f9597]';

    case 'electric':
      return 'bg-[#eed535] hover:bg-[#d1bc30]';

    case 'fairy':
      return 'bg-[#fdb9e9] hover:bg-[#e0a5ce]';

    case 'psychic':
      return 'bg-[#f366b9] hover:bg-[#db5ca6]';

    case 'fighting':
      return 'bg-[#d56723] hover:bg-[#be5d20]';

    case 'steel':
      return 'bg-[#9eb7b8] hover:bg-[#889c9c]';

    case 'ice':
      return 'bg-[#51c4e7] hover:bg-[#49afce]';

    case 'ghost':
      return 'bg-[#7b62a3] hover:bg-[#655186]';

    case 'rock':
      return 'bg-[#a38c21] hover:bg-[#86731b]';

    // GRADIENTES
    case 'flying':
      return `
        bg-linear-to-b from-sky-400 to-zinc-400
        hover:from-sky-500 hover:to-zinc-500
      `;

    case 'ground':
      return `
        bg-linear-to-b from-yellow-400 to-yellow-700
        hover:from-yellow-500 hover:to-yellow-800
      `;

    case 'dragon':
      return `
        bg-linear-to-b from-sky-500 to-red-400
        hover:from-sky-600 hover:to-red-500
      `;

    default:
      return 'bg-neutral-400 hover:bg-neutral-500';
  }
};

