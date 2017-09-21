import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ItemView = ({ item = {} }) => (
  <Container>
    <Link to="/items">View All Items</Link>
    <Header as="h3" textAlign="center">{item.name}</Header>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Title</Table.Cell>
          <Table.Cell>{item.title}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Details</Table.Cell>
          <Table.Cell>{item.details}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Status</Table.Cell>
          <Table.Cell>{item.status}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Priority</Table.Cell>
          <Table.Cell>${item.priority}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Color</Table.Cell>
          <Table.Cell>{item.color}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { item: state.items.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(ItemView);
