import {useState} from 'react'

const POC = () => {

    // let counter = 0;
    
    const [counter, setCounter] = useState(0);

    console.log('counter', counter)
    return (
        <div>
            <button onClick = {()=>{
                setCounter(counter + 1);

                console.log('button clicked', counter)
            
            }}>Click me</button>
            <h2>{counter}</h2>
        </div>
    )
}

export default POC;

// useState: it manages the state of the component