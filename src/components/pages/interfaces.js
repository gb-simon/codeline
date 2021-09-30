import "../styles.css";
import { Link } from "react-router-dom";

function InterfacesComponent() {
  return (
    <div className="body">
      <h1>Interfaces</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <p>
        Interface in Java is a bit like the Class, but with a significant
        difference: an interface can only have method signatures, fields and
        default methods. Since Java 8, you can also create default methods
      </p>
    </div>
  );
}

export default InterfacesComponent;
