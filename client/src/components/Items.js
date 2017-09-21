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
    // if(status)
    //   visible = items.filter( item => item.status === status)

    let col1 = items.filter( item => item.status == this.stati[0] )
    let col2 = items.filter( item => item.status == this.stati[1] )
    let col3 = items.filter( item => item.status == this.stati[2] )
    let col4 = items.filter( item => item.status == this.stati[3] )
    let col5 = items.filter( item => item.status == this.stati[4] )
    // debugger
    // this.stati


    return [0,1,2,3,4].map( col =>
        <Grid.Column key={col} computer={3} mobile={16} tablet={16}>
          { items.filter( i => i.status === this.stati[col]).map( item =>
              <Card style={styles.itemCard}>
                <Card.Content>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Meta>
                    <span>{item.details}</span>
                    <p>
                      <span>Status: {item.status}</span>
                      <span>Priority: {item.priority}</span>
                      <span>Color: {item.color}</span>
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
        <Grid columns={16}>
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
    height: '100px',
    overflowY: 'scroll',
  },
  itemCard: {
    height: '300px',
    marginBottom: '10px'
  },
}

const mapStateToProps = (state) => {
  const items = state.items;
  const statuses = [ ...new Set(items.map(item => item.status))]
  return { items, statuses };
}

export default connect(mapStateToProps)(Items);
