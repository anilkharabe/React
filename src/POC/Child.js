import React from "react";

const Child = ({count2, testing})=>{
    console.log('child component rendering')
    return (
        <div>
            <h1> this is my child component</h1>
        </div>
    )
}

export default React.memo(Child) 

// optimization => to increase the performance of application
// memo
// use custum hooks
// lazy loading
// useMemo/useCallback
// keep light components