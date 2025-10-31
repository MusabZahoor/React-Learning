import { useEffect, useState } from "react"

const UseEfct =()=>{
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setUsers(data));
    }, [])
    return(
        <>
       {
         users.map((user,index)=>(
            
               <ul key={user.id}>
                <li >{user.title}</li>
                <img src={user.image} style={{width:"20%"}}/>
               </ul>
            
        ))
       }
        </>
    )
}
export default UseEfct