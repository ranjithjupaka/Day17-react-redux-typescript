import { ActionTypes } from "../actionTypes";

interface depositAction {
  type: ActionTypes.DEPOSIT
  payload: number
}
interface withdrawAction {
  type: ActionTypes.WITHDRAW
  payload: number
}
interface bankruptAction {
  type: ActionTypes.BANKRUPT
}

 export type Action = depositAction | withdrawAction | bankruptAction
