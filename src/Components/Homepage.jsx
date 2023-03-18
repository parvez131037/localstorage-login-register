import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate = useNavigate()

const userName = JSON.parse(localStorage.getItem("user")) 
console.log(userName);

const handleLogout=()=>{
 if(window.confirm("Are you sure want to logout")){
  localStorage.removeItem("loggedIn");
  navigate('/login')
}
 }

  return (
    <>
    <div className='flex flex-col justify-center items-center my-10'>
    <h1 className='text-5xl mb-10'>Hello - {userName.name} </h1>
    <button onClick={handleLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Log Out
          </button>
          </div>
    </>
  )
}

export default Homepage
