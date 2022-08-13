import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/">Random</NavLink>
          </li>
          <li>
            <NavLink to="fav-quotes" activeClassName={classes.active}>Favorite Quotes</NavLink>
          </li>
          <li>
            <NavLink to="add-quote" activeClassName={classes.active}>+ Add Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
