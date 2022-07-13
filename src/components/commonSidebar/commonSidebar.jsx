import React, { Component } from 'react'
import { checkAllFalse } from '../../services/utilityService';
import "./commonSidebar.css"
class CommonSidebar extends Component {
  state = { 
    platformChecked:{
      "HackerRank":false,
      "HackerEarth":false,
      "AtCoder":false,
      "CodeForces":false,
      "LeetCode":false,
      "Kick Start":false,
      "TopCoder":false,
      "CodeChef":false
    },
    statusChecked:{
      "Running":false,
      "In 24 Hours":false,
      "Later":false
    }
  } 

  componentDidUpdate(prevProps, prevState){
    if(this.props.originalData!==prevProps.originalData)
      this.props.setFilteredData(this.props.originalData);
  }

  handleOnSubmit(e){
    const {originalData,setFilteredData}=this.props;
    const {platformChecked,statusChecked} = this.state;
    e.preventDefault();
    let newFilteredData=originalData;
    if(!checkAllFalse(platformChecked))
      newFilteredData=newFilteredData.filter((entry)=>{
        return platformChecked[entry.platform]
      })
    if(!checkAllFalse(statusChecked))
      newFilteredData=newFilteredData.filter((entry)=>{
        const {onGoing,in24Hours} = entry;
        return(
          (statusChecked["Running"]&&onGoing)
          ||(statusChecked["In 24 Hours"]&&in24Hours)
          ||(statusChecked["Later"]&&!in24Hours&&!onGoing)
        );
      })
    setFilteredData(newFilteredData);
  }

  handleOnPlatformChange(e){
    const platform=e.target.value;
    let platformChecked={...this.state.platformChecked};
    platformChecked[platform]=!platformChecked[platform];
    this.setState({platformChecked})
  }
  
  handleOnStatusChange(e){
    const status=e.target.value;
    let statusChecked={...this.state.statusChecked};
    statusChecked[status]=!statusChecked[status];
    this.setState({statusChecked})
  }
  
  renderPlatformFilter(){
    const {platformChecked} = this.state;
    return(
      <div>
        <div className=""><strong>Platform</strong></div>
        {Object.keys(platformChecked).map((option)=>{
          return(
            <div className='d-flex p-2 bd-highlight' key={option}>
              <input className='align-self-center form-check-input filled-in m-1' type="checkbox" id={option} name={option} value={option} checked={platformChecked[option]} onChange={(e)=>this.handleOnPlatformChange(e)}></input>
              <label htmlFor={option}>{option}</label><br></br>
            </div>
          )
        })}
      </div>
    )
  }

  renderStatusFilter(){
    const {statusChecked} = this.state;
    return (
      <div>
        <div className='mt-3'><strong>Status</strong></div>
        {Object.keys(statusChecked).map((option)=>{
          return(
            <div className='d-flex p-2 bd-highlight' key={option}>
              <input className='align-self-center form-check-input filled-in m-1' type="checkbox" id={option} name={option} value={option} checked={statusChecked[option]} onChange={(e)=>this.handleOnStatusChange(e)}></input>
              <label htmlFor={option}>{option}</label><br></br>
            </div>
          )
        })}
      </div>
    );
  }
  
  render() { 
    return (
      <div className='sidebar'>
        <h2 className='text-center p-2'>Filters</h2>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
          <div>
            {this.renderPlatformFilter()}
            {this.renderStatusFilter()}
          </div>
          <div className="text-center mt-3">
            <button className='btn btn-outline-dark' type="submit">Apply</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CommonSidebar;