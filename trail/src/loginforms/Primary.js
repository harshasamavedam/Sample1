import "./Loginstyle.css"

let username=""
let password=""


function click(event){
    event.preventDefault()
    console.log(username,password)
    console.log(event.target)
    console.log("entered some stuff")
    username=""
    password=""
    return <h1> Done</h1>
}


function userup(event){
    username=event.target.value
    console.log(username)
}
function passchange(event){
    password=event.target.value
    console.log(password)
}

export default function Loginform(){

return (
    <div className='div1'>
<div className='div2' >
    <form onSubmit={click}>
        <p>UserName</p>
        <input type="text" placeholder="Enter username" id="User" value={username} onChange={userup}/>
        <p>passwpord</p>
        <input type="password" placeholder="enter your password" id="pass" value={password}  onChange={passchange}/>
        <br/>
        <br/>
        <button type="submit">
            Login as user
            </button>
            </form>

        </div>
        </div>)
}