import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass:""
  });
  // console.log(input);

  const navigate = useNavigate()

  //to store value in local storage

  const handleSubmit =(e)=>{
    e.preventDefault();
    const { name, email, password, confirmPass } = input
    if(name && email && password && (password === confirmPass)){
      localStorage.setItem("user", JSON.stringify(input));
      alert("User registered suceesfully")
    navigate("/login")
    }else{
      alert("invlid input")
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-w-[800px] mx-auto mt-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              name
            </label>
            <input
            name="name"
            value={input.name}
            onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
              type="text"
            
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
             
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
            name="email"
            value={input.email}
            onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
         
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
            name="password"
            value={input.password}
            onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="•••••••••"
            />
          </div>
          <div className="mb-6">
            <label
              for="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
             name="confirmPass"
            value={input.confirmPass}
            onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
              type="password"
              id="confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
