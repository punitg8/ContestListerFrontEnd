import React, { Component } from 'react'
import DataGrid, { Scrolling, Pager, Paging, Column } from 'devextreme-react/data-grid';
import "./commonDashboard.css";
import moment from 'moment';

class CommonDashboard extends Component {
  state = {  } 


  customizeColumns(columns) {
    columns[0].visible = false;
    columns[7].visible = false;
    columns[8].visible = false;
    columns[9].visible = false;
    columns[10].visible = false;
    columns[2].width = 100;
    columns[4].width = 150;
    columns[6].width = 200;
    columns[5].width = 200;
    columns[4].calculateDisplayValue= (rowdata)=>{
      let duration="";
      let days=Math.floor(rowdata.duration/(60*60*24));
      let hours = Math.floor(rowdata.duration/(60*60))-days*24;
      let minutes=Math.floor(rowdata.duration/60)-hours*60-days*24*60;
      let seconds=rowdata.duration-minutes*60-hours*60*60-days*24*60*60;
      if(days>0) duration+=days+"days ";
      if(hours>0) duration+=hours+"hr ";
      if(minutes>0) duration+=minutes+"mins ";
      if(seconds>0) duration+=seconds+"secs";
      return duration; 
    }
    columns[5].calculateDisplayValue= (rowdata)=>{
      return moment(rowdata.startTime)._d;
    }
    columns[6].calculateDisplayValue= (rowdata)=>{
      return moment(rowdata.endTime)._d;
    }
    columns[3].encodeHtml=false;
    columns[3].calculateDisplayValue= (rowdata)=>{
      return `<a href="${rowdata.url}" target="_blank">${rowdata.url}</a>`;
    }
  }

  render() { 
    return (<div>
      <DataGrid
      className='container'
        id='gridContainer'
        dataSource={this.props.data}
        keyExpr="id"
        showBorders={true}
        customizeColumns={this.customizeColumns}
      >
        <Scrolling ></Scrolling>
        <Paging defaultPageSize={17} />
        <Pager
          visible={true}
          allowedPageSizes={5}
          displayMode={this.state.displayMode}
          showPageSizeSelector={this.state.showPageSizeSelector}
          showInfo={this.state.showInfo}
          showNavigationButtons={this.state.showNavButtons} />
      </DataGrid>
    </div>);
  }
}
 
export default CommonDashboard;