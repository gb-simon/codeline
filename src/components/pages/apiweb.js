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
      <div>
        <h4> Une API Web est le rêve d'un développeur</h4>
        <p>
          {" "}
          <i>Una API Web es el sueño de un desarrollador</i>{" "}
        </p>
        <br />
        <p>Una API es una aplicación web en el lado del Back-End </p>

        <p>
          Una API REST es una aplicación en el Back-End en donde tenemos una
          serie de rutas, configurados a una serie de métodos configurados que
          hacen funcionalidad, interacción con la base de datos que puede ser
          consumido mediante el protocolo HTTP por cualquier tipo de cliente,
          sea un web, dispositivo móvil, una tostadora o una cafetera, por
          cualquier cosa que entienda el protocolo HTTP{" "}
        </p>

        <p>
          Vamos a definir, como desarrolladores, métodos en el Back-End, por
          ejemplo, un login, registro, una barra de búsqueda, crear X cosa en la
          app, etc. Luego vamos a definir una ruta para cada uno de esos métodos
          y cada uno tendra un metodo HTTP diferente,{" "}
          <i>GET, POST, PUT, DELETE</i>, cualquier método HTTP que hay .{" "}
        </p>
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
      </div>
    </div>
  );
}

export default ApiWebComponent;
