import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
  return (
    <>
      <div className="tutorial">
        <CounterResult />
        <CounterButton step={2} calcType="+" />
        <CounterButton step={2} calcType="-" />
        <CounterButton step={10} calcType="+" />
        <CounterButton step={10} calcType="-" />
      </div>
    </>
  )
}
export default Counter;