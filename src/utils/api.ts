import axios from "axios";
import type { PokeBase } from "../types/PokeBase";
import type { PokeType } from "../types/pokeType";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
})

export const getPokeData = async (limit: number, offset: number): Promise<PokeBase[]> => {
  const { data: { results } } = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
  return results
}

export const getPokemon = async (name: string): Promise<PokeType> => {
  const res = await api.get(`pokemon/${name}`)
  return res.data
}