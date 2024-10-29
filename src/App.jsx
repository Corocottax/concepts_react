import "./App.css";
import Persona from "./components/Persona/Persona.jsx";
import { personas } from "./utils/personas.js";

const App = () => {
  return (
    <div>
      <h1>Listado de personas</h1>
      <ul>
        {personas.map((persona) => (
          <Persona key={persona.name} persona={persona} />
        ))}
      </ul>
    </div>
  );
};

export default App;