import { useSelector, useDispatch } from "react-redux";
import { setAmount, deposit, withdraw } from "./redux/actions";

const App = () => {
  const { amount, balance } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm space-y-6 border border-purple-200">
        <div className="text-center">
          <h3 className="text-md text-purple-700 font-medium">Current Balance</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">
            ₹{balance.toFixed(2)}
          </p>
        </div>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => dispatch(setAmount(e.target.value))}
          className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50 text-gray-700"
        />

        <div className="flex justify-between gap-4">
          <button
            onClick={() => dispatch(deposit())}
            disabled={!amount || Number(amount) <= 0}
            className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition disabled:opacity-50"
          >
            Deposit
          </button>

          <button
            onClick={() => dispatch(withdraw())}
            disabled={!amount || Number(amount) <= 0}
            className="w-1/2 bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg transition disabled:opacity-50"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
