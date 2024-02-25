import { ACTIONS } from "./App"
export const Digitbtn = ({dispatch,digit}) => {
  return (
    <button onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT,payload :{digit}})}>{digit}</button>
  )
}