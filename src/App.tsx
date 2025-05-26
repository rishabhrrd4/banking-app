import { useSelector, useDispatch } from "react-redux";
import { setAmount, deposit, withdraw } from "./redux/actions";

const App = () => {
  const { amount, balance } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{balance}</h3>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => dispatch(setAmount(e.target.value))}
      />
      <button
        onClick={() => dispatch(deposit())}
        disabled={!amount || Number(amount) <= 0}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch(withdraw())}
        disabled={!amount || Number(amount) <= 0}
      >
        Withdraw
      </button>
    </div>
  );
};

export default App;
