import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function TestDrivenComponent() {
  return (
    <div className="body">
      <h1> Test-Driven Development</h1>
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <hr />
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
      <span>
        <a href="https://gonzalosimon.hashnode.dev/javascript-challenge-with-test-job-interview-challenge">
          Ejemplo (JavaScript - Jest)
        </a>
      </span>{" "}
      <br />
      <span>
        <a href="https://www.freecodecamp.org/news/a-quick-introduction-to-test-driven-development-with-jest-cac71cb94e50/">
          Fuente
        </a>
      </span>
    </div>
  );
}

export default TestDrivenComponent;
