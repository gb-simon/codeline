import "../styles.css";
import { Link } from "react-router-dom";

function CodeReviewComponent() {
  return (
    <div className="body">
      <h1>Code Review</h1>
      <hr className="black" />
      <button>  <Link to="/"> Go Back </Link> </button>
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

      <p>
        As code reviews expose developers to new ideas and technologies, they
        write better and better code.
      </p>

      <ul>
        <li>
          Better code quality – improve internal code quality and
          maintainability (readability, uniformity, understandability, etc.)
        </li>
        <li>
          Finding defects – improve quality regarding external aspects,
          especially correctness, but also find performance problems, security
          vulnerabilities, injected malware, ...
        </li>
        <li>
          Learning/Knowledge transfer – help in transferring knowledge about the
          codebase, solution approaches, expectations regarding quality, etc.;
          both to the reviewers as well as to the author
        </li>
        <li>
          Increase sense of mutual responsibility – increase a sense of
          collective code ownership and solidarity
        </li>
        <li>
          Finding better solutions – generate ideas for new and better solutions
          and ideas that transcend the specific code at hand.
        </li>
        <li>
          Complying to QA guidelines, ISO/IEC standards – Code reviews are
          mandatory in some contexts, e.g., air traffic software,
          safety-critical software
        </li>
      </ul>
      <p>
        Code reviews should integrate with a team’s existing process. For
        example, if a team is using task branching workflows, initiate a code
        review after all the code has been written and automated tests have been
        run and passed–but before the code is merged upstream. This ensures the
        code reviewer’s time is spent checking for things machines miss, and
        prevents poor coding decisions from polluting the main line of
        development.
      </p>
    </div>
  );
}

export default CodeReviewComponent;
