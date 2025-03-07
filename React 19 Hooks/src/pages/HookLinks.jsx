import { Link } from "react-router-dom";
import "./HookLinks.css"; // Import the CSS file for styling

const hooks = [
  "useActionState",
  "useDebug",
  "useDeferredValue",
  "useImperativeHandle",
  "useInsertionEffect",
  "useLayoutEffect",
  "useOptimistic",
  "useSyncExternalStore",
  "useTransition",
];

const HookLinks = () => {
  return (
    <nav className="hook-links">
      <h2>React Hooks</h2>
      <ul>
        {hooks.map((hook, index) => (
          <li key={index}>
            <Link to={`/${hook}/example-1`}>{hook}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HookLinks;
