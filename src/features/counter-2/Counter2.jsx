import "../counter/Counter.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counter/counterSlice";
import { Link } from "react-router-dom";

const Counter2 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>
          <div>+</div>
        </button>
        <button onClick={() => dispatch(decrement())}>
          <div>-</div>
        </button>
      </div>
      <Link to="/">Counter 1</Link>
    </div>
  );
};

export default Counter2;
