import {useEffect, useState} from "react";
import styles from "../styles/ToDo.module.css";
import { common } from "@mui/material/colors";

const ToDoComponent =() =>{
  const initialValue = JSON.parse(localStorage.getItem  ("user_task_array")) 
  ||[
      { text: "Go to Market", complete: false },
      { text: "Buy vegetable", complete: false },
      { text: "Watch TV", complete: false },
      { text: "dance", complete: false },
      { text: "Singing", complete: false },
    ];
  
  const [item, setItem] = useState("");
  const [myTask, setMyTask] = useState(initialValue);
  const [activeValue, setActiveValue] = useState(myTask.length);
  const handleAddTask = () => {
    if(item) {
      let arr = [...myTask,{ text: item, complete: false }];
      setMyTask(arr);
      setItem("");
    }
  };

  const handleEmptyTask= ()=>{
    let arr=[...myTask];
    setMyTask([]);
  }

  useEffect(()=>{
    let arr = [...myTask];
    let newArr = arr.filter((each)=> !each.complete).length;
    let stringedData = JSON.stringify(myTask);
    localStorage.setItem("user_task_array", stringedData);
    setActiveValue(newArr);
  },[myTask]);

  function handleChange(e){
    setItem(e.target.value);
  }

  function handleAllTask(){

  }

  function handleCompletedTask(){
    let arr =[...myTask];
    let compt = arr.filter((c)=>{
      return c.complete == true;
    });
    setMyTask(compt);
  }
  function handleNotCompleted(){
    let arr =[...myTask];
    let Notcompt = arr.filter((Nc)=>{
      return Nc.complete == false;
    });
    setMyTask(Notcompt);
  }
  

  function handleCheckBox(index){
    let arr=[...myTask];
    console.log(myTask[index]);
    myTask[index].complete = !myTask[index].complete;
    setMyTask(arr);
    //filter logic
    let countArray = arr.filter((each) => !each.complete);
    setActiveValue(countArray.length);
  }

  return(
    <>
    <div className={styles.body}>
      <h1 className={styles.head}>To Do List</h1>
      <div className={styles.container}>
        <input type="text" placeholder="Add Items...." onChange={handleChange} value={item} className={styles.textBox}/>
          <button onClick={handleAddTask} className={styles.btn}>Add</button>
          <button onClick={handleEmptyTask} className={styles.Empbtn}>Empty</button>

        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Filter</button>
          <div className={styles.dropdowncontent}>
            <a onClick={handleAllTask}>All</a>
            <a onClick={handleCompletedTask}>Completed</a>
            <a onClick={handleNotCompleted}>Not Completed</a>
          </div>
        </div>

        <div >
          {myTask.map((eachValue,index)=>(
            <div className={styles.list}>
              <input type="checkbox" className={styles.checkBox}
              checked={eachValue.completed} 
              onChange={()=>{
                handleCheckBox(index);
              }}
              />

              <span style={{
                textDecoration: eachValue.completed ? "line-through" : "none",
              }}>
              {eachValue.text}
            </span>
        </div>
        ))}
      </div>
      <p className={styles.remaining}> Remaining work: {activeValue}</p>
      </div>
      </div>
    </>
  );
};
export default ToDoComponent;