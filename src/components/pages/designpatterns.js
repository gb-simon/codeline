import "../styles.css";
import { Link } from "react-router-dom";

function DesignPatternsComponent() {
  return (
    <div className="body">
      <h1>Patrones de Diseño </h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <br />
      <br />
      <img
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/design-patterns-everywhere.jpg"
        alt="meme sobre patrones de diseno"
      />
      <p>
        Los patrones de diseño son soluciones a nivel de diseño para problemas
        recurrentes, repetitivos, con los que nos encontramos a menudo los
        ingenieros de software, por tanto son elementos reusables No es un
        código.{" "}
      </p>
      <p>
        {" "}
        Es como una descripción de cómo abordar estos problemas y diseñar una
        solución. El uso de estos patrones se considera una buena práctica, ya
        que el diseño de la solución está bastante probado, lo que resulta en
        una mayor legibilidad del código final. Los patrones de diseño son
        creados y utilizados con bastante frecuencia por OOP Languages.{" "}
      </p>
      <p>
        {" "}
        Generalmente se utilizan para la generacion de objetos y su integracion.
        Pueden actuar como plantillas que pueden ser aplicadas a problemas del
        mundo real.{" "}
      </p>{" "}
      <h3>Gang of Four</h3>
      <p>
        Son cuatro autores del libro Elements of reusable object oriented
        software.{" "}
      </p>
      <p>
        El libro se divide en dos partes, la primera que explica la programacion
        orientada a objetos y la segunda explica 23 patrones de diseno Singleton
        Pattern Facade Pattern Bridge/Adapter Pattern Strategy Pattern Observer
        Pattern Dividen los patrones de diseno en tres: Creational: Este tipo de
        patron de diseno trabaja con la crecion e inicializacion de objetos,
        tiene flexibilidad en decidir que objetos deben ser creados dado el caso
        Structural: Trabaja con la composicion de clases y objetos Behavioural:
        Trabaja con la comunicacion entre clases y objetos
      </p>
      <h3>Tipos de patrones de diseño</h3>
      <p>
        Hay alrededor de 26 patrones descubiertos actualmente (no creo que lo
        haga hazlos todos ...).
      </p>
      <p>Estos 26 se pueden clasificar en 3 tipos:</p>
      <ul>
        {" "}
        <li>
          1. Creacional: estos patrones están diseñados para la instanciación de
          clases. Pueden ser patrones de creación de clases o creación de
          objetos. patrones.
        </li>{" "}
        <li>
          2. Estructural: estos patrones están diseñados con respecto a la clase
          estructura y composición. El objetivo principal de la mayoría de estos
          patrones es para aumentar la funcionalidad de la (s) clase (s)
          involucradas, sin cambiando gran parte de su composición.
        </li>
        <li>
          3. Comportamiento: estos patrones se diseñan en función de cómo una
          clase se comunica con los demás.
        </li>
      </ul>{" "}
      <h2>Tipo 1: Creacional - El patrón de diseño Singleton</h2>
      <p>
        El Patrón de Diseño Singleton es un patrón Creacional, cuyo objetivo es
        para crear solo una instancia de una clase y para proporcionar solo una
        global punto de acceso a ese objeto. Un ejemplo de uso común de tal
        clase en Java es Calendar, donde no puede crear una instancia de esa
        clase. Eso también utiliza su propio método getInstance () para obtener
        el objeto que se utilizará.
      </p>
      <p>Una clase que usa el patrón de diseño singleton incluirá,</p>
      <ul>
        <li>
          {" "}
          Una variable estática privada, que contiene la única instancia de la
          clase.
        </li>
        <li>
          {" "}
          Un constructor privado, por lo que no se puede crear una instancia en
          ningún otro lugar.
        </li>
        <li>
          {" "}
          Un método estático público, para devolver la única instancia de la
          clase.
        </li>
      </ul>
      <h2>Tipo 2: Estructural: el patrón de diseño del decorador</h2>
      <p>Description here</p>
      <p>Tip</p>
      <ul>
        <li> 1</li>
        <li> 1</li>
        <li> 1</li>
      </ul>
      <h2>Type 3: Behavioral - The Command Design Pattern</h2>
      <p>
        Un patrón de diseño de comportamiento se centra en cómo las clases y los
        objetos comunicarse entre sí. El enfoque principal del patrón de comando
        es inculcar un mayor grado de acoplamiento flexible entre las partes
        involucradas (lea: clases).
      </p>
      <p>Tip</p>
      <ul>
        <li> 1 </li>
        <li> 1 </li>
        <li> 1 </li>
      </ul>
      <span><a href="https://www.freecodecamp.org/news/the-basic-design-patterns-all-developers-need-to-know/">Fuente</a></span>
    </div>
  );
}

export default DesignPatternsComponent;
