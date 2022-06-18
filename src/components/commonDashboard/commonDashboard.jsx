import React, { Component } from 'react'
import DataGrid, { Scrolling, Pager, Paging } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import "./commonDashboard.css";

class CommonDashboard extends Component {
  state = {  } 


  customizeColumns(columns) {
    columns[0].visible = false;
    columns[7].visible = false;
    columns[8].visible = false;
    columns[9].visible = false;
    columns[10].visible = false;
    columns[2].width = 100;
    columns[4].width = 100;
    columns[6].width = 200;
    columns[5].width = 200;
    columns[4].calculateDisplayValue= (rowdata)=>{
      let duration="";
      // let days=rowdata.duration/60*60*24;
      // let 
      // if(rowdata.duration/60*60*24>0) duration+=
      return rowdata.duration; 
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