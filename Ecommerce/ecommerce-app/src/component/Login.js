import React from "react";
import { useState } from "react";
import  "./Header.css";



const Login = ()=>{
    const [email,setEmail]=useState(undefined)
    const[password,setPassword]=useState(undefined);
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }







    
    return(
      <div className=" flex mx-auto bg-slate-50 max-2-2xl shadow-lg space-x-28">
           <div className=" px-8 py-10">
           <div className="font-sans text-2xl mx-20">
           <h1 >Login </h1>
             
           </div>
           <div className="items-center justify-center my-4  space-x-20">
           <label className="block py-3 text-gray-700 text-m px-20 space-x-10">UserName</label>  
           <input type="text " className="h-10 w-80 border-amber-50 px-2 py-2 bg-stone-400"></input>
           
           </div>
           <div className="items-center justify-center my-4  space-x-20">
           <label className="block py-3 text-gray-700 text-m px-20">Password</label>  
           <input type="text " className="h-10 w-80  px-2 py-2 bg-stone-400 border-round "></input>
           </div>
           <div className="px-0 space-x-20">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10  rounded-full"> Login</button>
           
           <button className=" text-white font-bold py-2 px-5 rounded-full bg-red-500">signup</button>
           
           </div>
           
           <div className="px-4">
           <p className=" text-orange-700  font-bold px-2 py-4 text-left text-sm">Already Have account?</p>
           
           </div>
          
           
           </div>
                        
           
         
      </div>

    );
}
export default Login;