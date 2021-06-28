import React, { useState } from 'react';
import './App.css';
import api from './components/Api'
import  Navbar  from './components/Navbar';
import  User  from './components/User';
import { Content } from './components/Content'

// import  Home from "./components/Home"c



function App() {
  const [users  , setUsers ] = useState<any>([ ]  )  
  const btnHandler = ()  =>{
     setUsers(Content)
  
  
  }

console.log(users)

  return (
    <div className="App">
       <Navbar/>
      <button className='btn' onClick={ btnHandler }>Get Data</button>
       <div className="container">
          {users ? users.map((user : any , i : number)=>(<User
                     key={i} 
                     login = {user.login}
                     avatar_url = { user.avatar_url}
          
          />)) : ""}
       </div>
    </div>
  );
}

export default App;
