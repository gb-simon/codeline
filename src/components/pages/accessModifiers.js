import "../styles.css";
import { Link } from "react-router-dom";

function AccessModifiersComponent() {
  return (
    <div className="body">
      <h1>Modificadores de acceso</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
      <p>
        Los modificadores son elementos del lenguaje que se colocan delante de
        la definición de variables locales, datos miembro, métodos o clases y
        que alteran o condicionan el significado del elemento. En entradas
        anteriores se ha descrito uno, el modificador static que se usa para
        definir datos miembros o métodos como pertenecientes a una clase, en
        lugar de pertenecer a una instancia. En entradas futuras se describirán
        otros modificadores como final, abstract o synchronized. En este
        capítulo se presentan los modificadores de acceso, que son aquellos que
        permiten limitar o generalizar el acceso a los componentes de una clase
        o a la clase en si misma. Los modificadores de acceso permiten al
        diseñador de una clase determinar quien accede a los datos y métodos
        miembros de una clase, estos preceden preceden a la declaración de un
        elemento de la clase (ya sea dato o método), de la siguiente forma:
        <b>[modificadores] tipo_variable nombre </b>
      </p>
    </div>
  );
}

export default AccessModifiersComponent;
