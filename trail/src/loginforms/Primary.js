import {useState} from "react"
import {redirect} from 'react-router-dom'
import Home from './Home/Home' 
import "./Loginstyle.css"

export default function Loginform(){
let [username,userUp]=useState("")
let [password,passChange]=useState("")
let[login,Change]=useState(false)


const logout=()=>{

    return <div>
        <p>done entered</p>
        <button onClick={()=>Change(false)}>logout</button>
    </div>
}

const opt=()=>{
    return <div className='div1'>
<div className='div2' >
    <form onSubmit={click}>


        <p>UserName</p>
        <input type="text" placeholder="Enter username" id="User"  value={username} onChange={(event)=>{
            console.log(event.target.value)
            userUp(event.target.value)}}/>
        <p>Passwpord</p>
        <input type="password" placeholder="enter your password" id="pass" value={password} onChange={(event)=>passChange(event.target.value)}/>
        <br/>
        <br/>
        <button type="submit">
            Login as user
            </button>
            </form>

        </div>
        </div>
}

const click=(event)=>{
    event.preventDefault()
    userUp(()=>"")
    passChange(()=>"")
    console.log(event)
    Change(()=>true)
    }
console.log(login)
return login? logout():opt()
}