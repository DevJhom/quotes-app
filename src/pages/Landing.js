import DisplayedQuote from "../components/quotes/DisplayedQuote";
import ButtonNext from "../components/UI/ButtonNext";

const Landing = () => {

  const text =
    "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.";
  const author = "Frank Herbert";
  const book = "Dune";
  const year = "1965";

  return (
    <div className="centered">
      <DisplayedQuote text={text} author={author} book={book} year={year} />
      <ButtonNext text="Next Quote"/>
    </div>
  );
};

export default Landing;
