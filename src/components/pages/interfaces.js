import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function InterfacesComponent() {
  return (
    <div className="body">
      <h1>Interfaces</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <h1> ¿Qué son las interfaces?</h1>
      <p>
        Una interfaz es un tipo de referencia en Java o en lenguajes de fuerte
        tipado como C o C++. Es similar a la clase.
      </p>{" "}
      <p>
        Es una colección de métodos abstractos. Una clase implementa una
        interfaz, heredando así los métodos abstractos de la interfaz. Junto con
        los métodos abstractos, una interfaz también puede contener constantes,
        métodos predeterminados, métodos estáticos y tipos anidados.
      </p>
      <p>
        Es decir, otra forma de lograr la abstracción en Java es con interfaces.
        Un La interfaz es una "clase abstracta" que se utiliza para agrupar
        métodos con cuerpos vacíos.
      </p>
      <span>
        <a href="https://www.tutorialspoint.com/java/java_interfaces.htm">
          Fuente
        </a>
      </span>
    </div>
  );
}

export default InterfacesComponent;
