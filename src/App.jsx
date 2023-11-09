import "./App.css";
import MyRoutes from "./routes/MyRoutes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <MyRoutes />
    </div>
  );
};

export default App;
