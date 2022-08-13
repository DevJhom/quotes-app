import classes from "./Quote.module.css";

const Quote = (props) => {
  return (
    <li className={classes.wrapper}>
      <div className={classes["quote"]}>
        <p className={classes["quote-text"]}>"{props.text}"</p>
        <small className={classes["quote-info"]}>
          {props.author}, {props.book} ({props.year})
        </small>
      </div>
    </li>
  );
};

export default Quote;
