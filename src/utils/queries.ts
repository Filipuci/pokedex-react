import { useQuery } from "@tanstack/react-query";
import { getPokeData, getPokemon } from "./api";

export const usePokeData = (limit: number, offset: number) => useQuery({
  queryKey: ['pokedata', offset],
  queryFn: () => getPokeData(limit, offset)
})

export const usePokemon = (name: string) => useQuery({
  queryKey: ['pokemon', name],
  queryFn: () => getPokemon(name),
  staleTime: Infinity
})