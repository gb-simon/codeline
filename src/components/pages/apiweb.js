import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function ApiWebComponent() {
  return (
    <div className="body">
      <h1>Application Programming Interface</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <p>
        Une API Web est le rêve d'un développeur.
        <ul>
          <li>Puede ampliar la funcionalidad del navegador.</li>
          <li> Puede simplificar enormemente funciones complejas</li>
          <li>Puede proporcionar una sintaxis sencilla a código complejo.</li>
        </ul>
        <h3>¿Qué es la API web??</h3>
        <ul>
          <li>API son las siglas de Application Programming Interface.</li>
          <li>
            {" "}
            Una API web es una interfaz de programación de aplicaciones para la
            web.
          </li>
          <li>
            Una API de navegador puede ampliar la funcionalidad de un navegador
            web.
          </li>
          <li>
            Una API de servidor puede ampliar la funcionalidad de un servidor
            web.
          </li>
        </ul>
        <p>
          Todos los navegadores tienen un conjunto de API web integradas para
          admitir operaciones y para ayudar a acceder a los datos.
        </p>
        <p>
          Por ejemplo, la API de geolocalización puede devolver las coordenadas
          de donde se encuentra el navegador.
        </p>
      </p>
    </div>
  );
}

export default ApiWebComponent;
