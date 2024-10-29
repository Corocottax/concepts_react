import "./Persona.css";

const Persona = ({ persona }) => {
  return (
    <li className={persona.age >= 18 ? "mayor" : "menor"}>{persona.name}</li>
  );
};

export default Persona;
