import { useState } from "react";
import React from "react";

const User = (props)=>{
    const {name} = props;
    const [count, setCount] = useState(0);
    console.log('child render called');
    return(
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h3>Location: New Delhi </h3>
            <h4>Contact: 123456789</h4>
            <h2>Count: {count}</h2>
            <button onClick={() =>{
                setCount(count + 1)
            }}>Increase count</button>
        </div>
    )
}

export default React.memo(User);