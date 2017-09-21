import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Card, Image, Dropdown, Button,} from 'semantic-ui-react';

class Items extends Component {
  state = { status: '' };
  stati = ['Stories', 'To Do', 'In Progress', 'Testing', 'Done']

  statusOptions = () => {
    return this.props.statuses.map( (status, index) => {
      return { key: index, text: status, value: status }
    })
  }

  items = () => {
    const { items } = this.props;
    const { status } = this.state;
    let visible = items;

    return [0,1,2,3,4].map( col =>
        <Grid.Column key={col} equal>
          <h2 style={{ color: 'black'}}>{ this.stati[col] }</h2>
          { items.filter( i => i.status === this.stati[col]).map( item =>
            <Card style={styles.itemCard, { backgroundColor: item.color} } color={item.color} >
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                  <span>{item.details}</span>
                  {/* <p>Status: {item.status}</p> */}
                  <p>&nbsp;</p>
                  <p>
                    <strong>Priority: {item.priority}</strong><br />
                    <strong>Color: {item.color}</strong>
                  </p>
                </Card.Meta>
                <Card.Description style={styles.itemDescription}>
                  {item.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to={`/items/${item.id}`}>View Item</Link>
              </Card.Content>
            </Card>
          )
        }
      </Grid.Column>
    )
  }

  clearFilter = () => {
    this.setState({ status: '' });
  }

  render() {
    let { status } = this.state;
    return(
      <Container>
        <Header as='h3' textAlign='center'>Items</Header>
        <Dropdown
          placeholder='Filter Items By Status'
          fluid
          selection
          options={this.statusOptions()}
          value={status}
          onChange={ (e, data) => this.setState({ status: data.value })}
        />
        { status && <Button fluid basic onClick={this.clearFilter}>Clear Filter</Button> }
        <Grid columns='equal'>
          <Grid.Row>
            { this.items() }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  itemDescription: {
    overflowY: 'scroll',
  },
  itemCard: {
    marginBottom: '10px'
  },
}

const mapStateToProps = (state) => {
  const items = state.items;
  const statuses = [ ...new Set(items.map(item => item.status))]
  return { items, statuses };
}

export default connect(mapStateToProps)(Items);
