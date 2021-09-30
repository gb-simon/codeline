import "../styles.css";
import { Link } from "react-router-dom";

function TestDrivenComponent() {
  return (
    <div className="body">
      <h1>Test-Driven Development</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <p>
        Las pruebas unitarias, las Unit Test, son una característica clave del
        desarrollo impulsado por pruebas Test-Driven Development o TDDt, con
        enfoque al desarrollo de software.
      </p>
      La teoría detrás de TDD es bastante simple y gira en torno a 3 pasos:
      <ul>
        <li>
          Escribir una prueba para una pequeña parte de una funcionalidad y
          verificar que esta nueva prueba está fallando (paso rojo)
        </li>
        <li>
          Escribir el código que hace que la prueba pase, luego verificar que su
          la prueba anterior y la nueva son correctas (paso verde)
        </li>
        <li>
          Refactorizar el código para asegurarse de que sea claro, comprensible
          y se comporta bien con las funcionalidades anteriores
        </li>
      </ul>


      <h3>Example (in JavaScript) </h3>
     <p>Suppose there is a function written in file add.js </p>

      <span>
        <a href="https://gonzalosimon.hashnode.dev/javascript-challenge-with-test-job-interview-challenge">
          Enlace a mi articulo
        </a>
      </span>
      <span>
        <a href="https://www.freecodecamp.org/news/a-quick-introduction-to-test-driven-development-with-jest-cac71cb94e50/">
          Fuente
        </a>
      </span>
    </div>
  );
}

export default TestDrivenComponent;
