import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>ERROR 404</h2>
      <p>Page Not Found</p>
      <Link to="/">GO TO HOMEPAGE</Link>
    </div>
  );
};

export default NotFound;
