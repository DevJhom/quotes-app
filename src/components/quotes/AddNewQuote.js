import { Fragment } from "react";

import ButtonSubmit from "../UI/ButtonSubmit";
import classes from "./AddNewQuote.module.css";

const AddNewQuote = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Add Your New Favorite Quote</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.column}>
          <label htmlFor="quote">New Quote</label>
          <textarea id="quote" rows="5"></textarea>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <label htmlFor="author">Author</label>
            <input id="author" type="text" />
          </div>
          <div className={classes.column}>
            <label htmlFor="book">Book</label>
            <input id="book" type="text" />
          </div>
        </div>
        <div className={classes.column}>
          <label htmlFor="year">Year</label>
          <input id="year" type="number" />
        </div>
        <ButtonSubmit text="Add Quote"/>
      </form>
    </Fragment>
  );
};

export default AddNewQuote;
