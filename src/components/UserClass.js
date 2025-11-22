import {Component} from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo:{
        name:"Dummy",
        location:"Default",
        contact:"123456789"
      }
    };
    console.log('child constructor called');
  }


  async componentDidMount(){

    const data = await fetch('https://randomuser.me/api/');
    const json = await data.json();
    const {first: name} = json.results[0].name;
    const {city: location} = json.results[0].location;
    const {phone: contact} = json.results[0];
    // console.log("result:", json.results[0]);

    this.setState({
      userInfo:{
        name: name,
        location: location,
        contact: contact
      }
    })
    console.log('child component: componentDidMount called');
  }


  componentDidUpdate(){
    console.log('child component: componentDidUpdate called');
  }

  componentWillUnmount(){
    // it will call when component will unmount(when we are going on another page)
    console.log('child component: componentWillUnmount called');
  }

  render() {
    
    const { name, location, contact } = this.state.userInfo;
    const { count } = this.state;

    console.log('child render called');
    return (
        
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h3>Location:{location} </h3>
        <h4>Contact: {contact}</h4>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
                count: count + 1
            })
          }}
        >
          Increase count
        </button>
      </div>
    );
  }
}

export default UserClass;
