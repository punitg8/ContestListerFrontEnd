import React, { Component } from 'react'
import {getAllHiring} from "../../services/hiringService";
import CommonDashboard from '../commonDashboard/commonDashboard';
class HiringDashboard extends Component {
  state = { 
    data:[],
   } 
   componentDidMount(){
    getAllHiring((data)=>{
      this.setState({data});
    })
  }
  render() { 
    return (<div>
      <CommonDashboard data={this.state.data}></CommonDashboard>
    </div>);
  }
}
 
export default HiringDashboard;