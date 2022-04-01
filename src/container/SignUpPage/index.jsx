import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import axios from "axios";

const SignUpPage = () => {
  const initialEntry = {
    username: "",
    password: "",
    email:"",
    confirm_password: "",
    company: "Deloitte",
  };

  const [employ, setEmploy] = useState(initialEntry);
  const [type,setType] = useState('password');
  const[icon,setIcon] = useState(eyeBlocked);

  const handelInput = (e) => {
    const { name, value } = e.target;
    setEmploy({ ...employ, [name]: value });
  };

  const api_signup = "http://localhost:8080/api/auth/signup";
  const submitForm = (e) => {
    e.preventDefault();
    delete employ["confirm_password"];
    async function sendData(){
      const response = await axios.post(api_signup,employ)
      // console.log(employ);
      console.log(response);
    }
    sendData();
  };


  const handleToggle = () =>{
    if(type==='password'){
      setIcon(eye);
      setType('text');
    }

    else{
      setIcon(eyeBlocked);
      setType('password');
    }
  }

  return (
    <div className="wrapper-tab-one">
      <form action="submit" onSubmit={submitForm}>
        <div className="form-container">
          <div className="title-large">
            <span className="orange">Sign </span>
            <span className="white">Up</span>
          </div>

          <input
            type="text"
            className="input-container"
            placeholder="Enter a username"
            name="username"
            value={employ.username}
            onChange={handelInput}
          />

          <input
            type="text"
            className="input-container"
            placeholder="Enter your organisation mail id"
            name="email"
            value={employ.email}
            onChange={handelInput}
          />

          <div className="password-container">
            <input
              type={type}
              className="input-password-container"
              placeholder="Enter your password"
              name="password"
              value={employ.password}
              onChange={handelInput}
            />
            <span className="icon-container" onClick={handleToggle}>
              <Icon icon={icon} size={20} />
            </span>
          </div>
          <input
            type="password"
            className="input-container"
            placeholder="Confirm your password"
            name="confirm_password"
            value={employ.confirm_password}
            onChange={handelInput}
          />
          <select
            name="company"
            id=""
            className="select-container"
            value={employ.company}
            onChange={handelInput}
          >
            <option value="Deloitte">Deloitte</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
          </select>
          <button className="button-one margin-top-1vh">Sign Up</button>
          <div className="text-container padding-top-1vh">
            <span className="white">Already Registered?</span>
            <Link to="/">
              <button className="text-button">
                <u>
                  <span className="orange">Sign </span>
                  <span className="white">in</span>
                </u>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
