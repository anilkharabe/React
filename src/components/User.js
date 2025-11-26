import { useState } from "react";
import React from "react";

const User = (props)=>{
    const {name} = props;
    const [count, setCount] = useState(0);
    console.log('child render called');
    return(
        <div className="user-card">
            <h1 className="text-2xl">Name: {name}</h1>
            <h3 className="text-1xl">Location: New Delhi </h3>
            <h4 className="text-1xl">Contact: 123456789</h4>
            <button className="bg-red-300 p-1.5 m-4 rounded-lg" onClick={() =>{
                setCount(count + 1)
            }}>Child: Increase count</button>{count}
        </div>
    )
}

export default React.memo(User);