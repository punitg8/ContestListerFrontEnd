import React, { Component } from 'react'
import {getAllHackathon} from "../../services/hackathonService";
import CommonDashboard from '../commonDashboard/commonDashboard';
class HackathonDashboard extends Component {
  state = { 
    data:[],
   } 
   componentDidMount(){
    getAllHackathon((data)=>{
      this.setState({data});
    })
  }
  render() { 
    return (<div>
      <CommonDashboard data={this.state.data}></CommonDashboard>
    </div>);
  }
}
 
export default HackathonDashboard;