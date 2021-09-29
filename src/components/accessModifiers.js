import "./styles.css";

function AccessModifiersComponent() {
  return (
    <div className="body">
      <h1>Code Review</h1>
      <hr className="black" />
      <p>
        When a developer is finished working on an issue, another developer
        looks over the code and considers questions like:
      </p>
      <ul>
        <li>Are there any obvious logic errors in the code?</li>
        <li>Looking at the requirements, are all cases fully implemented?</li>
        <li>
          Are the new automated tests sufficient for the new code? Do existing
          automated tests need to be rewritten to account for changes in the
          code?
        </li>
        <li>Does the new code conform to existing style guidelines?</li>
      </ul>
    </div>
  );
}

export default AccessModifiersComponent;
