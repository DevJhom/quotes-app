import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import Navigation from "./Navigation";

import classes from "./Layout.module.css";
import "../../index.css";

const Layout = (props) => {
  const ctx = useContext(ThemeContext);

  return (
    <div className={`${classes.layout} ${ctx.theme}`}>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
