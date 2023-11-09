import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import NotFound from "../pages/NotFound";
import PokemonDetails from "../components/PokemonDetails";

const MyRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/" element={<Pokemon />} />
      <Route path="/pokemondetails/:name" element={<PokemonDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
