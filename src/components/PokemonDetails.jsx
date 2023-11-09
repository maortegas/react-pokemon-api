import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      const response = await fetch(urlBase + name);
      const data = await response.json();
      setPokemonImg(data.sprites.other["dream_world"].front_default);
      setPokemonDetails(data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products__container">
      <div className="card mb-3 text-center ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pokemonImg} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              {pokemonDetails.map((p, i) => {
                return (
                  <div key={i}>
                    {" "}
                    {p.stat.name} : {p.base_stat}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
