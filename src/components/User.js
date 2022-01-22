import {useEffect, useState} from 'react';
import axios from 'axios';

function User() {
  const [users, setUsers]=useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      setUsers(res.data)
      setIsLoading(false)
    })
    .catch((e)=> console.log(e))
    .finally(()=> setIsLoading(false))

  }, [])
  return <div>
    <h1>Users</h1>

    {isLoading && <div>Loading...</div>}
    {
      users.map((user) => 
      <div key={user.id}>{user.name}</div>)
    }
    </div>;
}

export default User;




// import {useEffect, useState} from 'react';

// function User() {
//   const [users, setUsers]=useState([]);
//   const [isLoading, setIsLoading] = useState(true);


//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data)
//       setIsLoading(false)
//     })
//     .catch((e)=> console.log(e))
//     .finally(()=> setIsLoading(false))

//   }, [])
//   return <div>
//     <h1>Users</h1>

//     {isLoading && <div>Loading...</div>}
//     {
//       users.map((user) => 
//       <div key={user.id}>{user.name}</div>)
//     }
//     </div>;
// }

// export default User;
