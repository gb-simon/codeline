import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function PolymorphismComponent() {
  return (
    <div className="body">
      <h1>Polimorfismo</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <p>
        Viene del griego, poli es muchas, morfismo es formas. Muchas formas.
        <p>
          Se lo relaciona con la naturaleza porque la naturaleza siempre
          encuentra un camino, es la característica de adaptación. En
          informática, cuando se da el polimorfismo quiere decir que un objeto
          puede cambiar de forma dependiendo del contexto en donde se utilice,
          por tanto al cambiar de forma ese mismo objeto también cambia de
          comportamiento.{" "}
        </p>
        <p>
          Es la habilidad de un objeto de realizar una acción de diferentes
          maneras. Utilizando métodos iguales que se implementen de formas
          diferentes en varias clases. Un ejemplo, es que si yo tengo un objeto
          vehículos y yo lo utilizo para describir automóviles, pero que pasa si
          de un momento a otro tengo que usarlo con una motocicleta o con un
          camión, entonces ese objeto pasaría a cambiar de forma y de
          comportamiento.
        </p>
        <p>
          Es una característica potente a la hora de programar, se facilita en
          lenguajes de programación.{" "}
        </p>
        <h3>Overload</h3>{" "}
        <p>
          {" "}
          Overwrite es sobrecarga, es la acción de definir varios métodos con el
          mismo nombre, pero con diferentes parámetros. No está relacionado ni
          con la anulación ni con el polimorfismo
        </p>{" "}
        <h4>Polimorfismo Estático:</h4>
        <p>
          {" "}
          Estatico significa que esta sobrecargado de diferentes tipo o números
          de parámetros en la misma clase. La llamada al método de destino se
          resuelve en tiempo de compilación.
        </p>
        <h3>Overwrite</h3>{" "}
        <p>
          Overwrite es anulación, es un tipo de función que ocurre en una clase
          que hereda de otra clase. Una función de anulación "reemplaza" una
          función heredada de la clase base, pero lo hace de tal manera que se
          la llama incluso cuando una instancia de su clase pretende ser de un
          tipo diferente a través del polimorfismo. Refiriéndose al ejemplo
          anterior, podría definir su propia clase y anular la función toString
          (). Debido a que esta función se hereda de Object, seguirá estando
          disponible si copia una instancia de esta clase en una variable de
          tipo Object. Normalmente, si llama a toString () en su clase mientras
          pretende ser un Object, la versión de toString que realmente se
          activará es la definida en el Object mismo. Sin embargo, debido a que
          la función es una invalidación, la definición de toString () de su
          clase se usa incluso cuando el tipo verdadero de la instancia de la
          clase está oculto detrás del polimorfismo.{" "}
        </p>
        <h4>Polimorfismo Dinámico</h4>
        <p>
          {" "}
          Tipado dinámico es cuando no es necesario especificar el tipo del
          objeto a la hora de programar, como por ejemplo con Java y con C++
          Polimorfismo dinámico: el mismo método se reemplaza con la misma firma
          en diferentes clases. El tipo de objeto en el que se invoca el método
          no se conoce en el momento de la compilación, pero se decidirá en el
          momento de la ejecución.
        </p>
      </p>
    </div>
  );
}

export default PolymorphismComponent;
