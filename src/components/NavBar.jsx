import { NavLink } from "react-router-dom";
import logo from "/poke-icon.svg";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <div>
        <img src={logo} alt="" width={40} />
      </div>
      <div>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemon/">Pokemon</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
