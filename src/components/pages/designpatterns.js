import "../styles.css";
import { Link } from "react-router-dom";

function DesignPatternsComponent() {
  return (
    <div className="body">
      <h1>Patrones de Diseño </h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
      <p>
      Los patrones de diseño son soluciones a nivel de diseño para problemas recurrentes, repetitivos, con los que nos encontramos a menudo los ingenieros de software, por tanto son elementos reusables No es un código. Es como una descripción de cómo abordar estos problemas y diseñar una solución.
      El uso de estos patrones se considera una buena práctica, ya que el diseño de la solución está bastante probado, lo que resulta en una mayor legibilidad del código final. Los patrones de diseño son creados y utilizados con bastante frecuencia por OOP Languages. 
      Generalmente se utilizan para la generacion de objetos y su integracion. Pueden actuar como plantillas que pueden ser aplicadas a problemas del mundo real. Gang of Four, son cuatro autores del libro Elements of reusable object oriented software. El libro se divide en dos partes, la primera que explica la programacion orientada a objetos y la segunda explica 23 patrones de diseno
      Singleton Pattern
      Facade Pattern
      Bridge/Adapter Pattern
      Strategy Pattern
      Observer Pattern
      Dividen los patrones de diseno en tres:
      Creational: Este tipo de patron de diseno trabaja con la crecion e inicializacion de objetos, tiene flexibilidad en decidir que objetos deben ser creados dado el caso
      Structural: Trabaja con la composicion de clases y objetos
      Behavioural: Trabaja con la comunicacion entre clases y objetos
      </p>
    </div>
  );
}

export default DesignPatternsComponent;
