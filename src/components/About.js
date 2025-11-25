import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { useState } from "react";


const About = () => {

    const [countAbout, setCountAbout] = useState(0);
    console.log('Parent render called');
  // constructor(props){
  //     super(props);
  //     // console.log('Parent constructor called');
  // }

  // componentDidMount(){
  //     // console.log('Parent component: componentDidMount called');
  // }

  // console.log('Parent render called')
  return (
    <div>
      <h1>About</h1>
      <h3> This is About Page learning React JS </h3>
      <h2>Abount Parent Count: {countAbout}</h2>
      <button
        onClick={() => {
          setCountAbout(countAbout + 1);
        }}
      >
        Increase count
      </button>
      {/* <UserClass /> */}
      <User name="Dummy" />
    </div>
  );
};

export default About;
