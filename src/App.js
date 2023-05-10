// import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from "./components/EmployeeList";
import Navbar from './components/Navbar';
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<EmployeeList/>}></Route>
          <Route path="/" element={<EmployeeList/>}></Route>
          <Route path="/employeeList" element={<EmployeeList/>}></Route>
          <Route path="/addEmployee" element={<AddEmployee/>}></Route> 
          <Route path="/editEmployee/:id" element={<UpdateEmployee/>}></Route> 
          <Route path="/viewEmployee/:id" element={<ViewEmployee/>}></Route> 
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
