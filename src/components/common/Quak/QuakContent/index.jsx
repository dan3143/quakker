import processString from "react-process-string";
import { Link } from "react-router-dom";

const process = processString([
  {
    regex: /#([a-zA-Z0-9]+)/,
    fn: (key, result) => {
      let topic = result[1];
      return (
        <Link to={`/trending/${topic}`} className="quak__link" key={key}>
          {result[0]}
        </Link>
      );
    },
  },
  {
    regex: /@([a-zA-Z][a-zA-Z0-9_]*)/,
    fn: (key, result) => {
      let username = result[1];

      return (
        <Link to={`/timeline/${username}`} className="quak__link" key={key}>
          {result[0]}
        </Link>
      );
    },
  },
]);

const QuakContent = ({ id, content }) => {
  if (content) {
    content = content
      .split("\n")
      .map(process)
      .map((line, index) => <p key={`${index}-${id}`}>{line}</p>);
    return <div className="quak__content">{content}</div>;
  }
  return <div></div>;
};

export default QuakContent;
