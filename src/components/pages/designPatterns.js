import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function DesignPatternsComponent() {
  return (
    <div className="body">
      <h1>Patrones de Diseño </h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
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
        Hay alrededor de 26 patrones descubiertos actualmente.
      </p>
      <p>Estos 26 se pueden clasificar en 3 tipos:</p>
      <ul>
        {" "}
        <li>
          1. Creacional: estos patrones están diseñados para la creación de
          clases o creación de objetos.
        </li>{" "}
        <li>
          2. Estructural: estos patrones están diseñados con respecto a la clase
          estructura y composición. El objetivo principal de la mayoría de estos
          patrones es para aumentar la funcionalidad de la clase involucradas,
          sin cambiar gran parte de su composición.
        </li>
        <li>
          3. Comportamiento: estos patrones se diseñan en función de cómo una
          clase se comunica con los demás.
        </li>
      </ul>{" "}
      <h2>Tipo 1: Creacional - El patrón de diseño Singleton</h2>
      <h3> Proposito</h3>
      <p>
        {" "}
        Singleton es un patrón de diseño creacional que permite asegurarnos
        de que una clase tenga una única instancia, a la vez que proporciona un
        punto de acceso global a dicha instancia.
      </p>
      <p>
        El Patrón de Diseño Singleton es un patrón Creacional, cuyo objetivo es
        para crear solo una instancia de una clase y para proporcionar solo una
        global punto de acceso a ese objeto. Un ejemplo de uso común de tal
        clase en Java es Calendar, donde no puede crear una instancia de esa
        clase. Eso también utiliza su propio método getInstance () para obtener
        el objeto que se utilizará.
      </p>
      <p>Una clase que usa el patrón de diseño singleton incluirá:</p>
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
      <h3> Proposito</h3>
      <p>
        {" "}
        Decorator es un patrón de diseño estructural que te permite añadir
        funcionalidades a objetos colocando estos objetos dentro de objetos
        encapsuladores especiales que contienen estas funcionalidades.
      </p>
      <img
        alt="cuadro descriptivo"
        src="https://refactoring.guru/images/patterns/content/decorator/decorator.png"
      />
      <p>
        Decorator es un patrón de diseño estructural que te permite añadir
        funcionalidades a objetos colocando estos objetos dentro de objetos
        encapsuladores especiales que contienen estas funcionalidades. El patrón
        de diseño Decorador es una estrategia de diseño revelada en 1994 para
        expandir la funcionalidad de las clases dinámicamente en el software de
        computación orientado a objetos. Según este patrón, cualquier objeto
        puede complementarse con un comportamiento deseado sin influir en las
        funcionalidades de otros objetos de la misma clase. Desde el punto de
        vista estructural, el patrón Decorador tiene mucho en común con el
        patrón Cadena de Responsabilidad (Chain of Responsibility), aunque, en
        contraste con este, con un procesador central, todas las clases reciben
        las peticiones
      </p>
      <p>Tip</p>
      <ul>
        <li>
          Hacer que los componentes del software orientado a objetos sean más
          flexibles y fáciles de reutilizar
        </li>
        <li>
          Permite a los desarrolladores añadir y eliminar las dependencias de un
          objeto de manera dinámica
        </li>
        <li>
          {" "}
          Añadir funcionalidades a objetos colocando estos objetos dentro de
          objetos
        </li>
      </ul>
      <h3>Something else</h3>
      <ul>
        Un ejemplo para poder ver la aplicabilidad del patrón decorador podría
        ser el siguiente:
        <li>
          Disponemos de una herramienta para crear interfaces gráﬁcas, que
          permite añadir funcionalidades como bordes o barras de desplazamiento
          a cualquier componente de la interfaz.
        </li>
        <li>
          Una posible solución sería utilizar la herencia para extender las
          responsabilidades de la clase. Si optamos por esta solución,
          estaríamos haciendo un diseño inflexible (estático), ya que el cliente
          no puede controlar cuándo y cómo decorar el componente con esa
          propiedad.
        </li>
        <li>
          {" "}
          La solución está en encapsular dentro de otro objeto, llamado
          Decorador, las nuevas responsabilidades. El decorador redirige las
          peticiones al componente y, además, puede realizar acciones
          adicionales antes y después de la redirección. De este modo, se pueden
          añadir decoradores con cualidades añadidas recursivamente.
        </li>
      </ul>
      <img
        alt="cuadro descriptivo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/DecoradorConcretoF.jpg"
      />
      <h2>Type 3: Behavioral - The Command Design Pattern</h2>
      <h3>Proposito</h3>
      <p>
        Command es un patrón de diseño de comportamiento que convierte una
        solicitud en un objeto independiente que contiene toda la información
        sobre la solicitud. Esta transformación te permite parametrizar los
        métodos con diferentes solicitudes, retrasar o poner en cola la
        ejecución de una solicitud y soportar operaciones que no se pueden
        realizar
      </p>
      <p>
        Un patrón de diseño de comportamiento se centra en cómo las clases y los
        objetos comunicarse entre sí. El enfoque principal del patrón de comando
        es inculcar un mayor grado de acoplamiento flexible entre las partes
        involucradas (lea: clases).
      </p>
      <p>Lo que implementa es</p>
      <ul>
        <li> Una interfaz Comando </li>
        <li> Una orden de clase que implementa la interfaz de comandos </li>
        <li> Una clase invocadora </li>
        <li> Una clase receptoras </li>
      </ul>
      <span>
        <a href="https://www.freecodecamp.org/news/the-basic-design-patterns-all-developers-need-to-know/">
          Fuente
        </a>
      </span>
      <br />
      <span>
        <a href="https://es.wikipedia.org/wiki/Decorator_(patr%C3%B3n_de_dise%C3%B1o)/">
          Fuente
        </a>
      </span>
      <br />
      <span>
        <a href="https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-el-patron-de-diseno-decorator/">
          Fuente
        </a>
      </span>
      <br />
      <span>
        <a href="https://refactoring.guru/es/design-patterns/decorator">
          Fuente
        </a>
      </span>
    </div>
  );
}

export default DesignPatternsComponent;
