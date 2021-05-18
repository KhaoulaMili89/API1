import  './App.css' ;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect ( ()  =>  {
  axios
      .get(`https://jsonplaceholder.typicode.com/users`)
        .then (res=>setData(res.data))
        .catch((err) => console.log(err));
  
  
  } ,  [] ) ;
  return (
    <div className='IdUser'>
      <h1>Users list</h1>
      {data.map((user) => (<li key ={user.id}>{user.name}</li>
        
      ) ) }
    </div>
  ) ;
} ;

export  default  UserList ;