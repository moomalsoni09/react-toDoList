import "./App.css";
import BodyComponent from "./components/BodyComponent";
import MuiComponent from "./components/MuiComponent";
import Counter from "./components/counter";
import Footers from "./components/footer";
import Header from "./components/header";
import HomePage from "./components/homePage";
import NavBarComponent from "./components/navBar";
import ToDoComponent from "./components/toDoComponent";
import Timer from "./components/use-Effect";
import DataFetchingComponent from "./components/use-Effect";
import UserCard from "./components/userCard";
import {BrowserRouter , Route , Routes} from 'react-router-dom';
// import {Browse}

function AppComponent(){
  
return(
  <>
  <BrowserRouter>
  <NavBarComponent/>
  {/* <MuiComponent/> */}
  <Routes>
    <Route path="/" element={<HomePage name={"Home page"}/>} />
    <Route path="/about" element={<HomePage name={"About page"}/>} />
    <Route path="/contact" element={<HomePage name={"Contact page"}/>} />
    <Route path="/counter" element={<HomePage name={<Counter/>}/>} />
    {/* <Route path="/ToDo" element={<HomePage name={< ToDoComponent/>}/>} />  */}
    <Route path="/mui" element={<HomePage name={<MuiComponent/>}/>} /> 
  </Routes>
  </BrowserRouter>
  {/* <HomePage/> 

  {/* <DataFetchingComponent/> */}
  {/* <ToDoComponent /> */}
  {/* <Timer/> */}
  {/* <Counter/> */}
     

    {/* <Header/> */}
    {/* {userData.map((oneObj)=>(
      <BodyComponent name={oneObj.name} age={oneObj.age}/>
    ))} */}
    {/* <Footers />
     <div className="class-container">
    {filterData.map((oneObj)=>(
      <UserCard 
      name={oneObj.name}
      age={oneObj.age}
      mobileNumber={"7728935445"} 
       />
    ))} 
    </div>

  <ul>
    {myTask.map((a,index)=>(
      <li key={index}>{a}</li>
    ))}
  </ul> */}
  </>
  );
}

export default AppComponent;