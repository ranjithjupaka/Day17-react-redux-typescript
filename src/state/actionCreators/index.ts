import { Dispatch } from "redux"
import { ActionTypes } from "../actionTypes"
import { Action } from '../actions/index'

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    })
  }
}

export const bankruptMoney = () => {
  return (dispatch : Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BANKRUPT,
    })
  }
}