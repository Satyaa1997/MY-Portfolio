import { useEffect,useState } from "react"

export function StateDemo(){

  const [title , setTitle] = useState('Hello!');

    useEffect(() =>{
    setTitle('Welcome')
  },[]);
    return(
        <div>
            <h3>State Demo</h3>
            <p>{title}</p>
        </div>
    )
}