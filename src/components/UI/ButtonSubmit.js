import classes from './ButtonSubmit.module.css';

const ButtonSubmit = (props) => {
    return (
        <button
          className={classes.btn}
          type="submit"
          onClick={props.onClick}
        >
          {props.text}
        </button>
      );
};

export default ButtonSubmit;