import User from "./User";
import UserClass from "./UserClass";
import React from 'react'

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log('Parent constructor called');
    }
    
    componentDidMount(){
        // console.log('Parent component: componentDidMount called');
    }

    render(){
        // console.log('Parent render called')
        return(
            <div>
                <h1>About</h1>
                <h3> This is About Page learning React JS  </h3>
                <UserClass />
            </div>

        )
    }
}

export default About;