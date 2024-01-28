import React from 'react'

const Home = ({token}) => {
    console.log(token);
  return (
    <>
    <h1>Hy {token.username}  some gretting!!</h1>
    
    <div>This is a Home page</div>
    
    
    </>
  )
}

export default Home