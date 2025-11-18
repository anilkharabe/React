import {useState} from 'react'

const POC = () => {

    // let counter = 0;
    
    const [counter, setCounter] = useState(0);

    console.log('counter', counter)
    return (
        <div>
            <h1>useState PoC</h1>
            <button onClick = {()=>{
                setCounter(counter + 1);

                console.log('button clicked', counter)
            
            }}>Click me</button>
            <h2>{counter}</h2>
            
            <h1>
                Remaining PoC:
                1. Memo <br/>
                2. useMemo <br/>
                3. useCallback <br/>
                4. Language Traslator <br/>
                
            </h1>
        </div>
    )
}

export default POC;

// useState: it manages the state of the component