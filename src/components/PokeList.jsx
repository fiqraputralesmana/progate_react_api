// Menerima function setSelectedPokemonName
const PokeList = ({ pokemonList, setSelectedPokemonName }) => {
  return (
    <div style={style.gridContent}>
      {pokemonList.map((item) => (
        // Tambahkan onClick event ke dalam div
        <div
          key={item.name}
          style={style.card}
          onClick={() => setSelectedPokemonName(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

const style = {
  gridContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  card: {
    textTransform: "capitalize ",
    padding: "16px 8px",
    backgroundColor: "aquamarine",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default PokeList;
