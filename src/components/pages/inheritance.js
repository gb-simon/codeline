import "../styles.css";
import { Link } from "react-router-dom";

function InheritanceComponent() {
  return (
    <div className="body">
      <h1>Herencia</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <p>
        Cuando tenemos herencia, tenemos una clase base, y otra que sería su
        hija, la clase hija va a tener herencia de la clase base. Cuando
        hablamos de herencia de la clase base decimos que adquiere las
        características de la clase base y posteriormente podemos adicionar
        características propias.{" "}
      </p>
      <p>
        Es el código que recibo de un objeto y que puedo reutilizar. Por
        ejemplo, la clase vehículo, sería la clase base y la clase automóvil,
        motocicleta y camión, serían clases hijas. O por ejemplo, si yo tengo
        una clase persona, como clase base. Luego podría hacer una clase alumno
        y otra clase profesor.{" "}
      </p>

      <p>
        Cualquier componente puede invocar a otro, al que podemos definir como
        su hijo, y pasarle propiedades que conformarán datos que este va a
        recibir y poder gestionar de manera interna. La comunicación entre
        componentes es una característica esencial y necesaria en proyectos
        grandes así que los frameworks buscan soluciones para que esta sea
        amigable en el caso de React tenemos que usar props para pasar
        información de un componente padre a un componente hijo.{" "}
      </p>

      <p>
        Utilizar los props es muy sencillo, lo primero que tenemos que hacer es
        crear un atributo personalizado en la etiqueta del componente hijo que
        se declara dentro del componente padre
      </p>
    </div>
  );
}

export default InheritanceComponent;
