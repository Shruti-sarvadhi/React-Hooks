import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); 

  //fetch API when app loads so this runs only once 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data)) 
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>User Information</h1>
      <ul>
        {users.length > 0 ? (
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

export default App;
