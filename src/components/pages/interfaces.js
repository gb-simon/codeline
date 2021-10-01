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
      <img
        alt="representacion de una interfaz"
        src="https://i.imgur.com/HAfYd0F.png"
      />
      <h3> ¿De qué me sirve una interfaz? </h3>
      <p> El uso de las interfaces Java proporciona las siguientes ventajas:</p>
      <ul>
        <li>Se utiliza para lograr la abstracción.</li>
        <li>
          Por interfaz, podemos admitir la funcionalidad de herencia múltiple.
        </li>
        <li>Organizar la programación.</li>
        <li>
          permiten declarar constantes que van a estar disponibles para todas
          las clases que queramos (implementando esa interfaz)
        </li>
        <li>Establecer relaciones entre clases que no estén relacionadas.</li>
        <li>
          Obligar a que ciertas clases utilicen los mismos métodos (nombres y
          parámetros).
        </li>
      </ul>
      <h4> Ejemplo </h4>
      <img
        alt="ilustracion de un ejemplo en codigo de una interfaz"
        src="https://i.imgur.com/B9fzoac.png"
      />{" "}
      <br />
      <span>
        <a href="https://es.wikipedia.org/wiki/Interfaz_(Java)">Fuente</a>
      </span>
      <br />
      <span>
        <a href="https://www.tutorialspoint.com/java/java_interfaces.htm">
          Fuente
        </a>
      </span>
    </div>
  );
}

export default InterfacesComponent;
