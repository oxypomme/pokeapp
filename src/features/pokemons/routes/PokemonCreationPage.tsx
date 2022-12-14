import PokemonForm from "../components/PokemonForm";

const PokemonCreationPage = (): JSX.Element => {
  const onSubmit = (payload: any) => console.log(payload);

  return <PokemonForm onSubmit={onSubmit} />;
};

export default PokemonCreationPage;
