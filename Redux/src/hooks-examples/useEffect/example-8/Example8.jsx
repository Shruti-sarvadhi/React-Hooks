import { useState, useEffect } from "react";

import Card from "./Card"
import axios from 'axios'


function Example8() {
  const [users, setUsers] = useState([]); 

  //fetch API when app loads so this runs only once 
  useEffect(() => {
    const controller=new AbortController()
    const signal=controller.signal
    axios.get("https://jsonplaceholder.typicode.com/users",{signal:signal})
      .then((res) => setUsers(res.data)) 
      .catch((error) => {
        if(axios.isCancel(error)){
          console.log(error);
        }
        else{
          console.log(error);
          
        }

      })

    return ()=>controller.abort();
  }, []);

  return (
    <>
      <h1>User Information</h1>
      <ul>
        {users ? (
          users.map((person) => (
            <Card
              key={person.id} 
              name={person.name}
              username={person.username}
              email={person.email}
              website={person.website}
            />
          ))
        ) : (
          <p>Loading...</p> 
        )}
      </ul>
    </>
  );
}

export default Example8;
