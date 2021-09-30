import "../styles.css";
import { Link } from "react-router-dom";

function AccessModifiersComponent() {
  return (
    <div className="body">
      <h1>Modificadores de acceso</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>

      <p>
        En Java, y en general, los modificadores de acceso son programación orientada a objetos que se
        utiliza para establecer la accesibilidad de clases, constructores,
        métodos y otros miembros de Java. Usando los modificadores de acceso
        podemos establecer el alcance o la accesibilidad de estas clases,
        métodos, constructores y otros miembros.{" "}
      </p>

      <ul>
        Hay cuatro tipos de modificadores de acceso
        <li>
          Private: Podemos acceder al modificador privado solo dentro de la
          misma clase y no de fuera de la clase.
        </li>
        <li>
          Default: Podemos acceder al modificador predeterminado solo dentro del
          mismo paquete y no desde fuera del paquete. Y además, si no lo hacemos
          especificar cualquier modificador de acceso, lo considerará
          automáticamente como defecto.{" "}
        </li>
        <li>
          Protected: Podemos acceder al modificador protegido dentro del mismo
          paquete y también desde fuera del paquete con la ayuda del niño clase.
          Si no hacemos la clase secundaria, no podemos acceder a ella desde
          fuera del paquete. Así que la herencia es imprescindible para acceder
          a ella desde fuera del paquete.{" "}
        </li>
        <li>
          Public: Podemos acceder al modificador público desde cualquier lugar.
          Podemos acceder modificadores públicos desde dentro de la clase, así
          como desde fuera de la class y también dentro del paquete y desde
          fuera del paquete.
        </li>
      </ul>
      <p>
        Los modificadores son elementos del lenguaje que se colocan delante de
        la definición de variables locales, datos miembro, métodos o clases y
        que alteran o condicionan el significado del elemento. En entradas
        anteriores se ha descrito uno, el modificador static que se usa para
        definir datos miembros o métodos como pertenecientes a una clase, en
        lugar de pertenecer a una instancia.
      </p>

      <p>
        En entradas futuras se describirán otros modificadores como final,
        abstract o synchronized. En este capítulo se presentan los modificadores
        de acceso, que son aquellos que permiten limitar o generalizar el acceso
        a los componentes de una clase o a la clase en si misma.
      </p>
      <p>
        Los modificadores de acceso permiten al diseñador de una clase
        determinar quien accede a los datos y métodos miembros de una clase,
        estos preceden preceden a la declaración de un elemento de la clase, ya
        sea dato o método.
      </p>

      <span><a href="https://www.mygreatlearning.com/blog/the-access-modifiers-in-java/">Fuente</a></span>
    </div>
  );
}

export default AccessModifiersComponent;
