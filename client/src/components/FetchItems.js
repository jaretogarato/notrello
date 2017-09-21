import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Items from './Items';
import ItemView from './ItemView';
import { getItems } from '../actions/items';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchItems extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getItems(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/items" component={Items} />
          <Route exact path="/items/:id" component={ItemView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchItems);
