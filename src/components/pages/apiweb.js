import "../styles.css";
import { Link } from "react-router-dom";

function ApiWebComponent() {
  return (
    <div className="body">
      <h1>Application Programming Interface</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
      <p>
        A Web API is a developer's dream.
        <ul>
          <li>It can extend the functionality of the browser</li>
          <li> It can greatly simplify complex functions</li>
          <li>It can provide easy syntax to complex code</li>
        </ul>
        <h3>What is Web API?</h3>
        <ul>
          <li>API stands for Application Programming Interface.</li>
          <li>
            {" "}
            A Web API is an application programming interface for the Web.
          </li>
          <li>A Browser API can extend the functionality of a web browser.</li>
          <li>A Server API can extend the functionality of a web server.</li>
        </ul>
        <p>
          All browsers have a set of built-in Web APIs to support complex
          operations, and to help accessing data.
        </p>
        <p>
          For example, the Geolocation API can return the coordinates of where
          the browser is located.
        </p>
      </p>
    </div>
  );
}

export default ApiWebComponent;
