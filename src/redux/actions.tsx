export const SET_AMOUNT = "SET_AMOUNT"
export const DEPOSIT = "DEPOSIT"
export const WITHDRAW = "WITHDRAW"

export const setAmount = (amount: number) => ({
    type: SET_AMOUNT,
    payload: amount,
})

export const deposit = () => ({type: DEPOSIT})

export const withdraw = () => ({type: WITHDRAW})