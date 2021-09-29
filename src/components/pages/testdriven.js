import "../styles.css";
import { Link } from "react-router-dom";

function TestDrivenComponent() {
  return (
    <div className="body">
      <h1>Test</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
      <p>
        No info yet
      </p>
    </div>
  );
}

export default TestDrivenComponent;
