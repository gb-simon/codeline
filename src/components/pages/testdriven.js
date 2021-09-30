import "../styles.css";
import { Link } from "react-router-dom";

function TestDrivenComponent() {
  return (
    <div className="body">
      <h1>Test-Driven Development</h1>
      <hr className="black" />
      <button>
        {" "}
        <Link to="/"> Go Back </Link>{" "}
      </button>
      <p>
        Unit testing is a key feature of the test-driven development (TDD)
        approach to software development.
      </p>
    </div>
  );
}

export default TestDrivenComponent;
