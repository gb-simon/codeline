import "../styles.css";
import { Link } from "react-router-dom";

function PolymorphismComponent() {
  return (
    <div className="body">
      <h1>Polimorfismo</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>s
      <p>
        Viene del griego, poli es muchas, morfismo es formas. Muchas formas. Se
        lo relaciona con la naturaleza porque la naturaleza siempre encuentra un
        camino, es la característica de adaptación. En informática, cuando se da
        el polimorfismo quiere decir que un objeto puede cambiar de forma
        dependiendo del contexto en donde se utilice, por tanto al cambiar de
        forma ese mismo objeto también cambia de comportamiento. Es la habilidad
        de un objeto de realizar una acción de diferentes maneras. Utilizando
        métodos iguales que se implementen de formas diferentes en varias
        clases. Un ejemplo, es que si yo tengo un objeto vehículos y yo lo
        utilizo para describir automóviles, pero que pasa si de un momento a
        otro tengo que usarlo con una motocicleta o con un camión, entonces ese
        objeto pasaría a cambiar de forma y de comportamiento. Es una
        característica potente a la hora de programar, se facilita en lenguajes
        de programación. Se puede dar dinámico o estático Overload - Estático
        Overwrite - Dinámico tipado dinámico, es decir cuando no es necesario
        especificar el tipo del objeto a la hora de programar, como por ejemplo
        con Java y con C++ Aquí también entra el concepto de herencia.
      </p>
    </div>
  );
}

export default PolymorphismComponent;
