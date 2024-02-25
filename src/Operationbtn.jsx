import { ACTIONS } from "./App"

export const Operationbtn = ({dispatch,operation}) => {
  return (
    <button onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}>{operation}</button>
  )
}