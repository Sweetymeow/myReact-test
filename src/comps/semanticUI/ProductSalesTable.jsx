import React from 'react';
// import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react';
import ProdSales from '../../data/MOCKDATA_DAYSALE.json';

class ProductSalesTable extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      prodSalesData: ProdSales
    }
    this.eachRow = this.eachRow.bind(this);
    this.clickTableRow = this.clickTableRow.bind(this);
  }

  clickTableRow(e) {
    console.log('Click Table Row: ', e);
  }

  eachRow( row, i ) {
    const rowID = `rowIdex_${i}`;
    return (
    <Table.Row
      id={rowID}
      onClick={this.clickTableRow} >
      <Table.Cell collapsing="collapsing">
        <Icon name='folder'/>
        {row.ITEM_ID} / {row.ITEM_DESC}
      </Table.Cell>
      <Table.Cell>{row.UNIT_THIS}</Table.Cell>
      <Table.Cell collapsing="collapsing" textAlign='right'>{row.REVENUE_LAST}</Table.Cell>
    </Table.Row> );
  }

  render() {
    return (
    <Table celled="celled" striped="striped">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.state.prodSalesData.map( this.eachRow )}
        {/* <Table.Row>
          <Table.Cell>
            <Icon name='folder'/>
            test
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='folder'/>
            build
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline'/>
            package.json
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline'/>
            Gruntfile.js
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>);
  }
}

export default ProductSalesTable;
