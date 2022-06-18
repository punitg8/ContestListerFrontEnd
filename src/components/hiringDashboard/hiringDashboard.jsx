import React, { Component } from 'react'
import {getAllHiring} from "../../services/hiringService";
import CommonSidebar from '../commonSidebar/commonSidebar';
import CommonDashboard from '../commonDashboard/commonDashboard';
class HiringDashboard extends Component {
  state = { 
    originalData:[],
    filteredData:[]
   } 
  componentDidMount(){
    getAllHiring((originalData)=>{
      this.setState({originalData});
    })
  }
  setFilteredData(filteredData){
    this.setState({filteredData});
  }
  render() { 
    return (<div className='d-flex p-2 bd-highlight'>
      <CommonSidebar originalData={this.state.originalData} setFilteredData={(data)=>this.setFilteredData(data)}></CommonSidebar>
      <CommonDashboard data={this.state.filteredData}></CommonDashboard>
    </div>);
  }
}
 
export default HiringDashboard;