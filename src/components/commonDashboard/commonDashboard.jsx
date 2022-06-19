import React, { Component } from 'react'
import DataGrid, { Scrolling, Pager, Paging } from 'devextreme-react/data-grid';
import { convertDuration } from '../../services/utilityService';
import "./commonDashboard.css";
import moment from 'moment';

class CommonDashboard extends Component {
  state = {  } 
  customizeColumns(columns) {
    if(!columns[0]) return;
    [0,7,8,9,10].forEach(element=>columns[element].visible=false);
    columns[2].width = 100;
    columns[4].width = 150;
    columns[6].width = 200;
    columns[5].width = 200;
    columns[4].calculateDisplayValue=rowdata=> convertDuration(rowdata.duration); 
    columns[5].calculateDisplayValue= rowdata=> moment(rowdata.startTime)._d;
    columns[6].calculateDisplayValue= rowdata=> moment(rowdata.endTime)._d;
    columns[3].encodeHtml=false;
    columns[3].calculateDisplayValue= rowdata=>`<a href="${rowdata.url}" target="_blank">${rowdata.url}</a>`;
    columns[4].allowSorting = false;
  }

  render() { 
    return (<div>
      <h1 className='p-2'>{this.props.section} Schedule</h1>
      <DataGrid
        className='container'
        id='gridContainer'
        dataSource={this.props.data}
        keyExpr="id"
        showBorders={true}
        customizeColumns={this.customizeColumns}
        showColumnLines={true}
        showRowLines={false}
        rowAlternationEnabled={true}
      >
        <Scrolling ></Scrolling>
        <Paging defaultPageSize={15} />
        <Pager
          visible={true}
          allowedPageSizes={5}
         />
      </DataGrid>
    </div>);
  }
}
 
export default CommonDashboard;