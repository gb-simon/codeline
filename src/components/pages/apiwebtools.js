import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function ApiWebToolsComponent() {
  return (
    <div className="body">
      <h1>API Web Tools</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>

      <h2>¿Qué son las API Tools?</h2>

      <p>
        En API Testing, se utiliza software para enviar llamadas a la API, obtener
        resultados y registrar la respuesta del sistema. Para el desarrollo
        ágil, las pruebas de API se vuelven importantes a medida que los ciclos
        de desarrollo más cortos ejercen más presión sobre las pruebas
        automatizadas.
      </p>

      <h3>Algunas API Testing Tools</h3>

      <ul>
        <li>Postman</li>
        <li>Katalon Studio</li>
        <li>Parasoft SOAtest </li>
      </ul>
    </div>
  );
}

export default ApiWebToolsComponent;
