import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function InterfacesComponent() {
  return (
    <div className="body">
      <h1>Interfaces</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <p>
        Another way to achieve abstraction in Java, is with interfaces. An
        interface is a completely "abstract class" that is used to group related
        methods with empty bodies
      </p>
    </div>
  );
}

export default InterfacesComponent;
