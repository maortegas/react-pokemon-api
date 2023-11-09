import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const { pokemons } = useContext(MyContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    if (search == "") {
      alert("Debe seleccionar un pokemon");
      return navigate(`/pokemon`);
    }
    return navigate(`/pokemondetails/${search}`);
  };

  return (
    <div className="text-center p-5">
      <h1>Seleciona un Pokemon</h1>
      <form action="">
        <div className="products__container">
          <div className="content-select">
            <select onChange={(e) => setSearch(e.target.value)}>
              <option key="" value="">
                Seleccione un pokemon
              </option>
              {pokemons.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </select>
          </div>
          <button
            className=" text-center btn btn-secondary boton"
            onClick={handleSubmit}
          >
            Ver Detalle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pokemon;
