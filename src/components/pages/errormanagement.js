import "../styles.css";
import { Link } from "react-router-dom";

function ErrorComponent() {
  return (
    <div className="body">
      <h1>Manejo de Errores</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <p>
        Los errores son condiciones que no forman parte de la operacion normal
        de un programa.
      </p>
      <p>Los errores pueden ser de sintaxis, semanticos o de ejecucion </p>
      <p>
        Los errores de sintaxis consisten en codigo escrito incorrectamnete{" "}
      </p>
      <p>
        Los errores semanticos son problemas con los algoritmos que impiden que
        gregresen el resultado esperado{" "}
      </p>{" "}
      <p>
        Los errores de ejecucion son condiciones que afectan la operacion normal
        del programa.
      </p>{" "}
      <p>
        Los mecanimsos principales para el manejo de errores de ejecucion son el
        uso de valores de retorno especiales, de indicadores explicitos de
        resultado, de funcionamiento para el manejo de errores y excepciones.{" "}
      </p>{" "}
      <p>
        La programacion segura con fallloos permite crear programas que se
        ejecutan razonablemente por cualqueir persona que los use{" "}
      </p>{" "}
      <h3>Excepciones</h3>
      <p>
        El manejo de excepciones es una técnica de programación que permite al
        programador controlar los errores ocasionados durante la ejecución de un
        programa informático. Cuando ocurre cierto tipo de error, el sistema
        reacciona ejecutando un fragmento de código que resuelve la situación,
        por ejemplo retornando un mensaje de error o devolviendo un valor por
        defecto
      </p>
      <p>
        El manejo de excepciones ayuda a lidiar con los errores de una
        aplicación por medio de la manipulación del código para hacer programas
        más robustos. Además existen herramientas que ayudan a manejarlas tal es
        el caso de los bloques try (intentar) que encierran el código que puede
        lanzar una excepción y los bloques el catch (atrapar) que lidian con las
        excepciones que surjan. También existen técnicas que el programador
        utiliza para conocer el posible funcionamiento del programa y detectar
        los errores que pueda contener.
      </p>
    </div>
  );
}

export default ErrorComponent;
