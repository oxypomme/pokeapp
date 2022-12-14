import { useMutation } from "@tanstack/react-query";

import useFetch from "@/hooks/useFetch";
import useMultipleFetch from "@/hooks/useMultipleFetch";

import type { InputPokemon, Pokemon } from "..";

export const useFetchPokemonList = (offset = 0, searchText = "", limit = 15) =>
  useFetch<{
    results: Pokemon[];
    count: number;
  }>(
    ["pokemon-list", { limit, offset, searchText }],
    "https://pokeapi.fly.dev/oxypomme1222/pokemons",
    {
      params: { limit, offset, searchText },
      keepPreviousData: true,
    }
  );

export const useFetchPokemon = (nameOrId: string) =>
  useFetch<Pokemon>(
    ["pokemon-detail", nameOrId],
    `https://pokeapi.fly.dev/oxypomme1222/pokemons/${
      nameOrId?.toLowerCase() ?? "undefined"
    }`
  );

export const useMultipleFetchPokemon = () =>
  useMultipleFetch<Pokemon, string>(
    "pokemon-detail",
    (nameOrId) =>
      `https://pokeapi.fly.dev/oxypomme1222/pokemons/${nameOrId.toLowerCase()}`
  );

export const useMutationPokemon = (params?: {
  onSuccess?: (payload: Pokemon | string) => void;
}) =>
  useMutation(
    async (payload: InputPokemon) => {
      const res = await fetch(
        "https://pokeapi.fly.dev/oxypomme1222/pokemons/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.json();
    },
    {
      onSuccess: params?.onSuccess,
    }
  );
