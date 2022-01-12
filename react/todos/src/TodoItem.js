import React,{useState} from "react";
import "./TodoItem.css"

export default function TodoItem() {
  const [isEditing, setIsEditing] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [message, setMessage] = useState("");


  const toggleDone = ()=>{
    setIsDone(!isDone)
  }
  const editMessage = (newMessage)=>{
    setMessage(newMessage)
  }

  if(isEditing){
    return (
      <>
      <form>
        <input type={"text"} placeholder={"Type the todo Message"} onChange={(e)=>editMessage(e.target.value)} value={message}/>
        <button type={"submit"} onClick={(e)=>{ e.preventDefault(); setIsEditing(false)}}>Set Message</button>
      </form>
      </>
    )
  }
  else{
    return(
      <div className={isDone? "completed":"incomplete"}>
        <label>
        <input 
          name={"isDone"} 
          type={"checkbox"}
          checked={isDone}
          onChange={toggleDone}
        />
        {message}
        </label>
        <button onClick={()=>setIsEditing(true)}>Edit</button>
      </div>
    )
  }
}