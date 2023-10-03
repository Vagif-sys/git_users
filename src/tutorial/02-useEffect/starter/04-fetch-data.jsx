import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';



const FetchData = () => {
 const [users, setUsers] = useState([])

  const fetchUsers = function(){
    fetch(url).then(res => res.json()).then(data => setUsers(data))
  }
 
 useEffect(()=>{
    fetchUsers()
 },[])

  return <div>
    <section>
       <h3>GitHub users</h3>
       <ul className="users">
          {users.map((user)=>{
             const {id,login,avatar_url,html_url} = user
              return <li key={id}>
                  <img src={avatar_url} alt={login}/>
                  <div>
                      <h5>{login}</h5>
                      <a href={html_url}>profile</a>
                  </div>
              </li>
          })}
       </ul>
    </section>
  
     
  </div>;
};
export default FetchData;
