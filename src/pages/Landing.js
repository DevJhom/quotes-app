import { useState } from "react";

import DisplayedQuote from "../components/quotes/DisplayedQuote";
import ButtonNext from "../components/UI/ButtonNext";

const dummy = [
  {
    text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
    author: "Frank Herbert",
    book: "Dune",
    year: "1965",
  },
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

let counter = 0;

const Landing = () => {
  const [displayedQuoteData, setDisplayedQuoteData] = useState(dummy[counter]);

  const onClickHandler = () => {
    if(counter < dummy.length - 1){
      ++counter;
    }else{
      counter = 0;
      //fetch more data
    }

    setDisplayedQuoteData(dummy[counter]);
  };

  return (
    <div className="centered">
      <DisplayedQuote
        text={displayedQuoteData.text}
        author={displayedQuoteData.author}
        book={displayedQuoteData.book}
        year={displayedQuoteData.year}
      />
      <ButtonNext text="Next Quote" type="button" onClick={onClickHandler} />
    </div>
  );
};

export default Landing;
