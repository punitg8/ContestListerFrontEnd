import React, { Component } from 'react'
import {getAllHackathon} from "../../services/hackathonService";
import CommonSidebar from '../commonSidebar/commonSidebar';
import CommonDashboard from '../commonDashboard/commonDashboard';
class HackathonDashboard extends Component {
  state = { 
    originalData:[],
    filteredData:[]
   } 
  componentDidMount(){
    getAllHackathon(originalData=> this.setState({originalData}));
  }
  setFilteredData(filteredData){
    this.setState({filteredData});
  }
  render() { 
    return (<div className='d-flex p-2 bd-highlight'>
      <CommonSidebar originalData={this.state.originalData} setFilteredData={(data)=>this.setFilteredData(data)}></CommonSidebar>
      <CommonDashboard data={this.state.filteredData} section="Hackathon"></CommonDashboard>
    </div>);
  }
}
 
export default HackathonDashboard;