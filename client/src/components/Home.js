import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <Header textAlign='center' as='h3'>
    <Link to='/items'><h2>Jump On In!</h2></Link>
  </Header>
)

export default Home;
