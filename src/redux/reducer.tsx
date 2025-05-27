import { SET_AMOUNT, DEPOSIT, WITHDRAW } from "./actions";

const initialState = {
  amount: "",
  balance: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT: {
      return { ...state, amount: action.payload };
    }

    case DEPOSIT: {
      const amt = Number(state.amount);
      if (isNaN(amt) || amt <= 0) return state;
      return { ...state, balance: state.balance + amt, amount: "" };
    }

    case WITHDRAW: {
      const amt = Number(state.amount);
      if (isNaN(amt) || amt <= 0 || state.balance < amt) {
        return state;
      }
      return { ...state, balance: state.balance - amt, amount: "" };
    }

    default: {
      return state;
    }
  }
};
