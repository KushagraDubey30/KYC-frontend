import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import SignInPage from './container/SignInPage';
import SignUpPage from './container/SignUpPage';
import FormPage from './container/FormPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployDashboard from './container/EmployDashboard';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element = {<SignInPage/>}/>
        <Route path = "/sign-up" element = {<SignUpPage/>}/>
        <Route path = "/form/:id" element = {<FormPage/>}/>
        <Route path = "/employ/dashboard" element = {<EmployDashboard/>} />
      </Routes>
    </div>
    </BrowserRouter>

    // <div className="app">
    //   <EmployDashboard/>
    // </div>
  );
}


export default App;
