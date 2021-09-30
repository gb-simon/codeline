import "../styles.css";
import { Link } from "react-router-dom";

function ApiWebToolsComponent() {
  return (
    <div className="body">
      <h1>Api Web Tools</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>

      <h2>Que son las API Tools?</h2>

      <p>
        Una API es un conjunto de funciones que permite a las aplicaciones
        acceder a datos mientras interactúan con componentes de software
        externos, servicios operativos, etc. En lo que respecta al
        almacenamiento en la nube, las API coordinan el intercambio de datos
        entre las infraestructuras del sistema.
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
