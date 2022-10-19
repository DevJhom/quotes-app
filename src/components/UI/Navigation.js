import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";

import classes from "./Navigation.module.css";
import "../../index.css";

const Navigation = () => {
  const ctx = useContext(ThemeContext);

  const themeToggleHandler = () => {
    ctx.toggleTheme(ctx.theme);
  }

  const themeOpposite = ctx.theme === 'dark' ? 'light' : 'dark';

  return (
    <header className={classes.header}>
      <div className={classes.logo}>J-Quoes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" className={ctx.theme}>Random</NavLink>
          </li>
          <li>
            <NavLink to="fav-quotes" activeClassName={classes.active} className={ctx.theme}>Favorite Quotes</NavLink>
          </li>
          <li>
            <NavLink to="add-quote" activeClassName={classes.active} className={ctx.theme}>+ Add Quote</NavLink>
          </li>
          <li>
            <button className={`${classes['toggle-btn']} ${themeOpposite}`} onClick={themeToggleHandler}>{themeOpposite}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
