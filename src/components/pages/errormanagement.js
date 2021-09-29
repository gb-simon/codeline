import "../styles.css";
import { Link } from "react-router-dom";

function ErrorComponent() {
  return (
    <div className="body">
      <h1>Clases</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
      <p>
        Las clases son una plantilla para crear objetos. Encapsulan datos con
        código para trabajar con esos datos. Las clases en JS se basan en
        prototipos, pero también tienen alguna sintaxis y semántica que no se
        comparten con la semántica de clase ES5.  La palabra clave extends es
        usada en declaraciones de clase o expresiones de clase para crear una
        clase hija.  class Perro extends Animal  
      </p>
    </div>
  );
}

export default ErrorComponent;
