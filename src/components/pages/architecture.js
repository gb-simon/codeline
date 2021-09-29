import "../styles.css";
import { Link } from "react-router-dom";

function SoftwareArchitectureComponent() {
  return (
    <div className="body">
      <h1>Arquitecturas de software</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
     
        <p><i>Del libro Programer to software architecture. By Michael Keeling</i></p>
        
        <p>La arquitectura de software es un conjunto de decisiones de diseño
        importantes para organizar el software y promover los atributos de
        calidad deseados. Decisiones de diseño es definir para nuestra
        arquitectura cuáles son las decisiones de diseño que van a guiar el
        trabajo del equipo por ejemplo digamos yo escogí como patrón de
        arquitectura microservicios, una decisión de diseño que pude haber
        tomado es que todos van a trabajar contra una misma base de datos y no
        que cada microservicio tenga una base de datos individual, por ejemplo
        es un decisión de diseño esa decisión de diseño debo tomarlas y debo
        documentarlas para poder ser comunicada al equipo Por otro lado, los
        atributos de calidad son muy importantes para el arquitecto porque le
        permite definir qué es lo que va más allá de lo funcional que va a
        garantizar el qué sistema funcione bien. Atributos de calidad hay
        muchos, pero hay que ver qué funciona mejor para la aplicación, por
        ejemplo, facilidad de mantenimiento, despeligabilidad, escalabilidad,
        elasticidad.</p>
    </div>
  );
}

export default SoftwareArchitectureComponent;
