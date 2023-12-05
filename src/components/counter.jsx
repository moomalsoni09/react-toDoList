import { useState } from "react";
import styles from "../styles/Counter.module.css";
const Counter=()=>{
  let [count,setCount]= useState(0);
  function handleAddClick(){
    if(count<10){ 
      setCount(count+1)
    }
  }
  function handleSubtractClick(){
    if(count>0){
      setCount(count-1)
    }
  }
  return(
    <>
    <h3 className={styles.heading}>Count:{count}</h3>
    {count<10 && (
      <button onClick={handleAddClick}>Add Count</button>
    )}
    
    {count>0 && (
      <button onClick={handleSubtractClick}>Subtract Count</button>
    )}

    {count==0 ? <p>You have reached the limit</p> : <></>}
    {count==10 ?<p>Hurray you have completed the limit</p> : <></>}
    </>
  );
};
export default Counter;