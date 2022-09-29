import Quote from "./Quote";

import classes from "./Quotes.module.css";

const dummy = [
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    book: "",
    year: "",
  },
  {
    text: "Whatever it is you're seeking won't come in the form you're expecting.",
    author: "Haruki Murakami",
    book: "",
    year: "",
  },
];

const Quotes = (props) => {
  return (
    <ul className={classes.quotes}>
      {dummy.map((quote) => {
        return (
          <Quote
            text={quote.text}
            author={quote.author}
            book={quote.book}
            year={quote.year}
          />
        );
      })}
    </ul>
  );
};

export default Quotes;
