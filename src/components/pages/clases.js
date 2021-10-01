import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function ClasesComponent() {
  return (
    <div className="body">
      <h1>Clases</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <h2> ¿Qué es una clase? </h2>
      <p>
        La definicion de diccionario dice que una clase es un conjunto o
        categoría de cosas que tienen alguna propiedad o atributo en común y se
        diferencian de otras por clase, tipo o calidad.{" "}
      </p>

      <p>
        Una clase se usa en programación orientada a objetos para describir uno
        o más objetos.{" "}
      </p>
      <img
        alt="ilustracion sobre como funcionan las clases"
        src="http://net-informations.com/faq/oops/img/class.png"
      />
      <h3>¿Para qué sirven las clases?</h3>

      <p>
        {" "}
        Sirve como plantilla para crear o instanciar objetos específicos dentro
        de un programa. Si bien cada objeto se crea a partir de una sola clase,
        una clase se puede utilizar para crear instancias de varios objetos.
      </p>

      <p>
        {" "}
        Las clases en JavaScript se basan en prototipos, pero también tienen
        alguna sintaxis y semántica que no se comparten con la semántica de
        clase ES5. La palabra clave extends es usada en declaraciones de clase o
        expresiones de clase para crear una clase hija.
      </p>

      <br />

      <span>
        <a href="http://net-informations.com/faq/oops/class.htm">Fuente</a>
      </span>
    </div>
  );
}

export default ClasesComponent;
