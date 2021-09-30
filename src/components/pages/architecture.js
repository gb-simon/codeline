import "../styles.css";
import { Link } from "react-router-dom";

function SoftwareArchitectureComponent() {
  return (
    <div className="body">
      <h1>Arquitecturas de software</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <p>
        <i>Del libro Programer to software architecture. By Michael Keeling</i>
      </p>
      <p>
        La arquitectura de software es un conjunto de{" "}
        <b>decisiones de diseño </b>
        importantes para organizar el software y promover los{" "}
        <b>atributos de calidad</b> deseados.
      </p>
      <span>
        <p>
          De aqui puedo tomar dos conceptos claves.{" "}
          Las<i> decisiones de diseño</i> y por otro lado, los{" "}
          <i>atributos de calidad</i>.{" "}
        </p>
      </span>
      <h2>Decisiones de diseño</h2>
      Es definir para nuestra arquitectura cuáles son las decisiones de diseño
      que van a guiar el trabajo del equipo por ejemplo digamos yo escogí como
      patrón de arquitectura microservicios, una decisión de diseño que pude
      haber tomado es que todos van a trabajar contra una misma base de datos y
      no que cada microservicio tenga una base de datos individual, por ejemplo
      es un decisión de diseño esa decisión de diseño debo tomarlas y debo
      documentarlas para poder ser comunicada al equipo
      <h2>Atributos de Calidad</h2>
      <p>
        {" "}
        Son muy importantes para el arquitecto porque le permite definir qué es
        lo que va más allá de lo funcional que va a garantizar el qué sistema
        funcione bien. Atributos de calidad hay muchos, pero hay que ver qué
        funciona mejor para la aplicación, por ejemplo, facilidad de
        mantenimiento, despeligabilidad, escalabilidad, elasticidad.
      </p>
    </div>
  );
}

export default SoftwareArchitectureComponent;
