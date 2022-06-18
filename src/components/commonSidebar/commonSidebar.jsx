import React, { Component } from 'react'
import "./commonSidebar.css"
class CommonSidebar extends Component {
  state = { 
    platformChecked:{
      "HackerRank":true,
      "HackerEarth":true,
      "AtCoder":true,
      "CodeForces":true,
      "LeetCode":true,
      "Kick Start":true,
      "TopCoder":true,
      "CodeChef":true
    },
    statusChecked:{
      "Running":true,
      "In 24 Hours":true,
      "Later":true
    }
  } 
  componentDidUpdate(prevProps, prevState){
    if(this.props.originalData!==prevProps.originalData)
      this.props.setFilteredData(this.props.originalData);
  }
  handleOnSubmit(e){
    e.preventDefault();
    console.log(this.state.statusChecked);
    let newFilteredData=[];
    newFilteredData=this.props.originalData.filter((entry)=>{
      return this.state.platformChecked[entry.platform]
      &&(
        (this.state.statusChecked["Running"]&&entry.onGoing)
        ||(this.state.statusChecked["In 24 Hours"]&&entry.in24Hours)
        ||(this.state.statusChecked["Later"]&&!entry.in24Hours)
      );
    })
    this.props.setFilteredData(newFilteredData);
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
  render() { 
    return (
      <div className='sidebar'>
        <h2 className='text-center p-2'>Filters</h2>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
          <div>
          <div className=""><strong>Platform</strong></div>
          {Object.keys(this.state.platformChecked).map((option)=>{
            return(
              <div className='d-flex p-2 bd-highlight' key={option}>
                <input className='align-self-center form-check-input filled-in m-1' type="checkbox" id={option} name={option} value={option} checked={this.state.platformChecked[option]} onChange={(e)=>this.handleOnPlatformChange(e)}></input>
                <label htmlFor={option}>{option}</label><br></br>
              </div>
            )
          })}
          <div className='mt-3'><strong>Status</strong></div>
          {Object.keys(this.state.statusChecked).map((option)=>{
            return(
              <div className='d-flex p-2 bd-highlight' key={option}>
                <input className='align-self-center form-check-input filled-in m-1' type="checkbox" id={option} name={option} value={option} checked={this.state.statusChecked[option]} onChange={(e)=>this.handleOnStatusChange(e)}></input>
                <label htmlFor={option}>{option}</label><br></br>
              </div>
            )
          })}
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