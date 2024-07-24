interface Props {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

const PokemonCard = (props: Props) => {
  const { id, name, onClick } = props;
  const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div onClick={() => onClick(id)}>
      <img src={imgPokemon} alt={name} className="w-40 h-40" />
      <label className="font-mono font-bold">{name}</label>
    </div>
  );
};

export default PokemonCard;
