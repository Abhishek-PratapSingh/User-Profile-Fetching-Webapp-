import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from "react-redux"
import React, { useEffect, useState } from 'react'
import {displayAllUsers} from './redux/allUsers'
import {displaySingleUser} from './redux/singleUser'
import axios from 'axios';

function App() {

  // const [display,setDisplay] = useState(0)
  // let obj;
  // const fetchData = async () => {
  //   return await axios.get("https://reqres.in/api/users?page=2")
  //         .then((response) => console.log(response.data) );
  // }

  let obj =[]
  let profile={}
  const  fetchData = async () => {
    return await axios.get("https://reqres.in/api/users?page=2")
         .then((response) => 
         // console.log(response.data) 
         {  
           const data=response.data.data
           console.log(data)
             data.map(e=>{
             // setTimeout(()=>{ 
              obj.push(e)
              // console.log(e)
             // } 
             // , 1000)
               // console.log(state)
              })
     
         }
     
         );
    }
    
    const fetchUser = async (id) => {
      return await axios.get(`https://reqres.in/api/users/${id}`)
           .then((response) => 
           // console.log(response.data) 
           {  
             const data=response.data.data
             console.log(data)
             
             profile=data;
       
           }
       
           );
      }

  const dispatch = useDispatch()
  
  useEffect(()=>{

    
    fetchData()
    
    setTimeout(()=>{
      console.log(obj)
      dispatch(displayAllUsers(obj))
      
    } , 200)
      // setDisplay(display+1);
      // fetchData()
      // console.log(obj)
  }, [])

  const {value} = useSelector((state) => state.users)
  // console.log("value: " + value)  
  
 const displayUserDetails = e => {
      // console.log(e.target.id)
      const id=e.target.id 
      fetchUser(id)
      setTimeout(()=>{
      dispatch(displaySingleUser(profile))
           
      } , 100)
 }

 const {user} = useSelector((state) => state.singleUser)

  const style={"border" : "6px solid darkBlue" , "backgroundColor" : "Azure" , "fontSize" : "3rem" , "margin":"2rem" 
       , "width" : "5rem"    
   }

  const textStyle1= {"marginTop" : "3rem ", "fontSize" : " 1.8rem" , "fontFamily" : "verdana" };
  const textStyle2= {"marginTop" : "2rem ", "fontSize" : " 1.6rem" , "fontFamily" : "verdana" };

  return (
    <div className="App">
       
       <h2  style={{"fontFamily" : "verdana" }}> Check for Any User By Clicking on Button</h2>
       <hr />         
       <br />

       <div  style={{ "height" : "20rem" , "width" : "40rem" , "border" : "8px solid black" , "margin" : "auto", "backgroundColor" : "Azure"}} >
          {user=='' ?  
        
            (   <div style={textStyle1} >{ "No User Choosen to Display" } </div>
            // , console.log('hhhh')  
            ) :
             
            <div style={{"display" : "flex"}}>
              <img src={user.avatar} alt="" style={{"marginLeft":"15px" , "marginTop":"15px"  }} />
              <div style={{"marginLeft":"2rem"}} >
                   <h2>User Profile</h2>
                  <div style={textStyle1}> { "Name: "   + user.first_name + ' ' + user.last_name} </div>
                  <div style={textStyle2}> {"Email: " + user.email} </div> 
                  <div style={textStyle2}> {"Id: " + user.id} </div> 
              </div>
            </div>
          }  
         
       </div>

       <div style={{"display" : "flex" , "justifyContent" : "center" }}>
          
          {value.map(e=>{
              return <button  id={e.id}  onClick={e=> displayUserDetails(e)} style={style} > {e.id} </button>
           })
          }

       </div>
     
    </div> 
  );
}

export default App;
