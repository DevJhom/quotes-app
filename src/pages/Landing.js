import { useState, useEffect } from "react";

import DisplayedQuote from "../components/Quotes/DisplayedQuote";
import ButtonNext from "../components/UI/ButtonNext";

const Landing = () => {
  const [displayedQuoteData, setDisplayedQuoteData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      if (res.ok) {
        setDisplayedQuoteData(data);
      } else {
        throw new Error("Oops! Something went wrong.");
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="centered">
      {!isLoading && !error && (
        <DisplayedQuote
          text={displayedQuoteData.content}
          author={"- " + displayedQuoteData.author}
        />
      )}
      {isLoading && !error && <DisplayedQuote text={"loading..."} />}
      {!isLoading && error && <DisplayedQuote text={error} />}
      <ButtonNext text="Next Quote" type="button" onClick={fetchQuote} />
    </div>
  );
};

export default Landing;
