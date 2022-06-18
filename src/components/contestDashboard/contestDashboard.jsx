import React, { Component } from 'react';
import { getAllContest } from '../../services/contestService';
import CommonDashboard from '../commonDashboard/commonDashboard';
class ContestDashboard extends Component {
  state = { 
    data:[],
   } 
  componentWillMount(){
    getAllContest((data)=>{
      this.setState({data});
    })
  }
  render() { 
    return (<div>
      <CommonDashboard data={this.state.data}></CommonDashboard>
    </div>);
  }
}
 
export default ContestDashboard;