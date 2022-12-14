import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import PokemonForm from "../components/PokemonForm";
import { useMutationPokemon } from "../hooks/query";

const PokemonCreationPage = (): JSX.Element => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useMutationPokemon({
    onSuccess: (data) => {
      console.log(data);
      if (typeof data === "string") {
        // ERROR
        return;
      }
      queryClient.invalidateQueries(["pokemon-list"]);
      navigate(`/pokemons/${data.id}`);
    },
  });

  return <PokemonForm onSubmit={(payload) => mutateAsync(payload)} />;
};

export default PokemonCreationPage;
