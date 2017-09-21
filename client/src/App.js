import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import ItemView from './components/ItemView';
import FetchItems from './components/FetchItems';
import NoMatch from './components/NoMatch';

import logo from './notrello.png';

import './App.css';

const Item = () => (
  // es6 function like this ^^ has an implicit return
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome To NoTrello</h1>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* this will match /items and /items/:id  */}
        <Route path='/items' component={FetchItems} />
        {/* <Route exact path='/items' component={Items} />
        <Route exact path='/items/:id' component={ItemView} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
)

// class Item extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//       </div>
//     );
//   }
// }

export default Item;
