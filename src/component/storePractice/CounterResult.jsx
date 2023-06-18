import { useSelector } from "react-redux";
// import { useCounter } from "./CounterContext";

const CounterResult = () => {
  const state = useSelector(state => state);
  // const state = useCounter();
  return <h3>{state}</h3>;
};

export default CounterResult;