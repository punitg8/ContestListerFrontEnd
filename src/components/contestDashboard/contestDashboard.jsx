import React, { Component } from 'react';
import { getAllContest } from '../../services/contestService';
import CommonDashboard from '../commonDashboard/commonDashboard';
import CommonSidebar from '../commonSidebar/commonSidebar';
class ContestDashboard extends Component {
  state = { 
    originalData:[],
    filteredData:[]
   } 
  componentDidMount(){
    getAllContest((originalData)=>{
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
 
export default ContestDashboard;