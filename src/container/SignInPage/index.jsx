import { useState } from "react";
import "./index.css";
import { Link , useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import axios from "axios";

const SignInPage = () => {
  
  let navigate = useNavigate();
  
  const initialEntry = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialEntry);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);

  const handelInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const api = "http://localhost:8080/api/auth/signin"


  
  const submitForm = (e) => {
    e.preventDefault();
    async function sendData(){
      const response = await axios.post(api,user);
      console.log("response",response);
      localStorage.setItem("token",response.data.accessToken)
      const config={
        headers : {
          Authorization: 'Bearer '+ localStorage.getItem('token')
        }
      }
      console.log(config);
      const res1 = await axios.get(`http://localhost:8080/api/user/${response.data.id}/personalDetails`,config);
      const res2 = await axios.get(`http://localhost:8080/api/user/${response.data.id}/education`,config);
      const res3 = await axios.get(`http://localhost:8080/api/user/${response.data.id}/addressDetails`,config);
      const res4 = await axios.get(`http://localhost:8080/api/user/${response.data.id}/bankDetails`,config);
      const res5 = await axios.get(`http://localhost:8080/api/user/${response.data.id}/employement`,config);

      const data = {

      }

      for(const key in res1.data){
        if(res1.data[key]!= null){
          console.log("Asdf");
          data[key]=res1.data[key];
        }else{
          data[key] = "";
        }
      }

      for(const key in res2.data){
        if(res2.data[key]!= null){
          data[key]=res2.data[key];
        }else{
          data[key] = "";
        }
      }

      for(const key in res3.data){
        if(res3.data[key]!= null){
          data[key]=res3.data[key];
        }else{
          data[key] = "";
        }
      }

      for(const key in res4.data){
        if(res4.data[key]!= null){
          data[key]=res4.data[key];
        }else{
          data[key] = "";
        } 
      }

      for(const key in res5.data){
        if(res5.data[key]!= null){
          data[key]=res5.data[key];
        }else{
          data[key] = "";
        }
      }

      // console.log(data);


      navigate('/employ/dashboard',{state:{
        data:data,
        id:response.data.id,
        email:response.data.email,  
      }});
    }
    sendData();
    
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeBlocked);
      setType("password");
    }
  };

  return (
    <div className="wrapper-tab-one">
      <form action="submit" onSubmit={submitForm}>
        <div className="form-container">
          <div className="title-large">
            <span className="orange">Sign </span>
            <span className="white">In</span>
          </div>
          <input
            type="text"
            className="input-container"
            placeholder="Login"
            name="username"
            value={user.username}
            onChange={handelInput}
          />
          <div className="password-container">
            <input
              type={type}
              className="input-password-container"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handelInput}
            />
            <span className="icon-container" onClick={handleToggle}>
              <Icon icon={icon} size={20} />
            </span>
          </div>
          <select
            name="user_type"
            id=""
            className="select-container"
            value={user.user_type}
            onChange={handelInput}
          >
            <option value="Employ">Employ</option>
            <option value="Admin">Admin</option>
            <option value="Organisation">Organisation</option>
          </select>
          <div className="checkbox-container">
            <div className="check-box">
              <input type="checkbox" name="" id="" />
              <span className="white"> Remember me</span>
            </div>
            <button className="text-button">Forgot Password?</button>
          </div>
          {/* <Link to="/form"> */}
            <button className="button-one">Login</button>
          {/* </Link> */}
          <div className="text-container padding-top-1vh">
            <span className="white">Want to register with us?</span>

            <Link to="/sign-up">
              <button className="text-button">
                <u>
                  <span className="orange">Sign </span>
                  <span className="white">up</span>
                </u>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
