import "../styles.css";
import { Link } from "react-router-dom";

function ApiWebToolsComponent() {
  return (
    <div className="body">
      <h1>Api Web Tools</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
      <p>
        No info yet  
      </p>
    </div>
  );
}

export default ApiWebToolsComponent;
