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
        <h3>¿Qué es la API Web?</h3>
        <h4> Une API Web est le rêve d'un développeur</h4>
        <p>
          {" "}
          <i>Una API Web es el sueño de un desarrollador</i>{" "}
        </p>
        <br />
        <p>Una API es una aplicación web en el lado del Back-End </p>
        <h3> ¿Qué es una API REST? </h3>
        <p>
          Una API REST es una aplicación en el Back-End en donde tenemos una
          serie de rutas, configurados a una serie de métodos configurados que
          hacen funcionalidad, interacción con la base de datos que puede ser
          consumido mediante el protocolo HTTP por cualquier tipo de cliente,
          sea un web, dispositivo móvil, una tostadora o una cafetera, por
          cualquier cosa que entienda el protocolo HTTP{" "}
        </p>
        <h4> Entonces... ¿Qué es una API REST? </h4>
        <p>
          Es un Back-End, con una serie de URLs que nos devuelve un resutlado
          datos que van y vienen de el Back-End al Front-End.{" "}
        </p>
        <p>
          Vamos a definir, como desarrolladores, métodos en el Back-End, por
          ejemplo, un login, registro, una barra de búsqueda, crear X cosa en la
          app, etc. Luego vamos a definir una ruta para cada uno de esos métodos
          y cada uno tendra un metodo HTTP diferente,{" "}
          <i>GET, POST, PUT, DELETE</i>, cualquier método HTTP que hay .{" "}
        </p>
        <p>
          Una vez definida esa ruta queda disponible cualquier cliente, en
          Front-End, por ejemplo con react tiene peticiones AJAX, va a poder
          traer ese resultado y una API REST devuelve los datos, normalmente en
          la actualidad lo suele devuelve en JSON porque es una forma que está
          mejor organizada y tiene menos peso, tiene facilidad mandar datos en
          JSON del Front-End al Back-End y del Back-End al Front-End.{" "}
        </p>
        <h4> ¿De qué me sirve una API? </h4>
        <p>
          Actualmente es una tendencia muy potente en el desarrollo web porque
          este tipo de servicio web es uno en el Back-End que más se suele
          desarrollar, por ejemplo las aplicaciones móviles tienen mucho auge,
          estas necesitan un Back-End, un servicio web y aquí entra la API REST,
          que haga cosas, que interactúe con la base de datos, etc; suele tener
          más facilidad con esto. Ademas no solo sirve para una web y
          aplicaciones móviles, tambien funciona para cualquier tipo de
          desarrollo. Por tanto las desarrollas una vez y puede servir para mil
          cosas.{" "}
        </p>
        
        <ul>
          <li>Puede ampliar la funcionalidad del navegador.</li>
          <li> Puede simplificar enormemente funciones complejas</li>
          <li>Puede proporcionar una sintaxis sencilla a código complejo.</li>
        </ul>
        <br/>
        <p>
          Todos los navegadores tienen un conjunto de API web integradas para
          admitir operaciones y para ayudar a acceder a los datos.
        </p>
        <p>
          Por ejemplo, la API de geolocalización puede devolver las coordenadas
          de donde se encuentra el navegador.
        </p>
        <ul>
          <li>API son las siglas de Application Programming Interface.</li>
          <li>
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
      </div>

      <span>
        <a href="https://www.w3schools.com/js/js_api_intro.asp">Fuente</a>
      </span>
    </div>
  );
}

export default ApiWebComponent;
