import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [input, setInput] = useState({
    email:"",
    password:""
})

const navigate = useNavigate()
const handleLogin=(e)=>{
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user")) ;
    if(input.email === loggedUser.email && input.password === loggedUser.password){
        localStorage.setItem("loggedIn",true);
        navigate('/')
    }else{
        alert("Invalid input")
    }
}
  return (
    <>
      


<form onSubmit={handleLogin}>
        <div className="max-w-[800px] mx-auto mt-10 mb-6">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              name='email'
              value={input.email}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
              required
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
            
              name='password'
              value={input.password}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Login
          </button>
          <button onClick={()=>navigate("/register")}
            className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Register
          </button>
        </div>
      </form>

    </>
  )
}

export default Login
