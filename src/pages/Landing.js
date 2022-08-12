import Quote from "../components/quotes/Quote";
import ButtonNext from "../components/UI/ButtonNext";

const Landing = () => {
  return (
    <div className="centered">
      <Quote />
      <ButtonNext text="Next Quote"/>
    </div>
  );
};

export default Landing;
