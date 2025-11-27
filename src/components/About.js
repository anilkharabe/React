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
    <div className="my-7">
      <h1 className="text-7xl">About</h1>
      <h3 className="text-3xl"> This is About Page learning React JS </h3>
     
      <button className="bg-red-300 p-1.5 m-4 rounded-lg"
        onClick={() => {
          setCountAbout(countAbout + 1);
        }}
      >
        Parent: Increase count
      </button>{countAbout}
      {/* <UserClass /> */}
      <User name="Dummy" />
    </div>
  );
};

export default About;
