import React from 'react'

import Todo from './Todo'

import {useSelector} from 'react-redux';



import Logout from './Login/Logout'


export default  () => {

  function getGreeting() {
    const currentHour = new Date().getHours();
    let greeting = "";
    let emoji = "";

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning!";
        emoji = "🌅"; // Sunrise emoji
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon!";
        emoji = "☀️"; // Sun emoji
    } else {
        greeting = "Good night!";
        emoji = "🌙"; // Crescent moon emoji
    }

    return `${greeting} ${emoji}`;


  }

  const greetingMessage = getGreeting();


  const token=useSelector((state) => state.auth.token);


  
  console.log(token);
    
  return (
    <>

    <div className="flex items-center justify-around my-4">
        <span className="text-lg font-bold">{ `Hy ${token?.token.username}  ${greetingMessage}`}</span>
        <Logout />
        
        
    </div>


    <Todo />
    
    
    </>
  )
}

