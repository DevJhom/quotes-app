import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./ButtonNext.module.css";

const ButtonNext = (props) => {
  return (
    <button
      className={classes.btn}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.text}
      <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
    </button>
  );
};

export default ButtonNext;
