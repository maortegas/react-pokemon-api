import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const urlBase = "https://pokeapi.co/api/v2/pokemon/";
export const MyProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    const response = await fetch(urlBase);
    const data = await response.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <MyContext.Provider value={{ pokemons }}>{children}</MyContext.Provider>
  );
};
