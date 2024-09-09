
import { NavLink } from 'react-router-dom';

// Usage in a component
function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact className="myappac" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/my-appac" className="myappac" activeClassName="active">
        Go to Myappac
      </NavLink>
    </nav>
  );
}
export default Navigation