import "../styles.css";
import { Link } from "react-router-dom";
import "../styles.css"
function SolidComponent() {
  return (
    <div className="body">
      <h1>Principio SOLID</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>

      <p>
        {" "}
        SOLID es un acrónimo acuñado por Robert C. Martin en el cual se
        representan los cinco principios básicos de la programación orientada a
        objetos. La intención de seguir estos principios es eliminar malos
        diseños, evitar la refactorización y construir un código más eficiente y
        fácil de mantener
      </p>

      <li>
        S – Single Responsability Principle (SRP) (Principio de responsabilidad
        única) Este principio establece que un componente o clase debe tener una
        responsabilidad única, sencilla y concreta.{" "}
      </li>
      <li>
        O – Open/Closed Principle (OCP) (Principio abierto / cerrado) Este
        principio establece que los componentes del software deben estar
        abiertos para extender a partir de ellos, pero cerrados para evitar que
        se modifiquen.{" "}
      </li>
      <li>
        L – Liskov Substitution Principle (LSP) (Principio de substitución de
        Liskov) Este principio establece que una subclase puede ser sustituida
        por su superclase. Es decir, podemos crear una subclase llamada Auto, la
        cual deriva de la superclase Vehículo. Si al usar la superclase el
        programa falla, este principio no se cumple.{" "}
      </li>
      <li>
        I – Interface Segretation Principle (ISP) (Principio de segregación de
        interfaz) Este principio establece que los clientes no deben ser
        forzados a depender de interfaces que no utilizan. Es importante que
        cada clase implemente las interfaces que va a utilizar. De este modo,
        agregar nuevas funcionalidades o modificar las existentes será más
        fácil.{" "}
      </li>
      <li>
        D – Dependency Inversion Principle (DIP) (Principio de inversión de
        dependencias) Este principio establece que los módulos de alto nivel no
        deben de depender de los de bajo nivel. En ambos casos deben depender de
        las abstracciones. Alto nivel se refiere a operaciones cuya naturaleza
        es más amplia o abarca un contexto más general y bajo nivel son
        componentes individuales más específicos.{" "}
      </li>
      <h3> Conclusión </h3>
      <p>
        Aplicar los principios de SOLID nos permitirá crea software más
        ordenado, limpio y fácil de mantener. En sistemas cuyo tamaño se
        considera grande, y donde existen muchos módulos, librerías y funciones,
        contar con estos principios no solo ayudará en el mantenimiento, también
        a crecer el código de manera más eficiente y limpia.
      </p>
    </div>
  );
}

export default SolidComponent;
