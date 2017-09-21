import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as="h3" textAlign="center">
    Page not found!
    <Link to="/">Return to the home page.</Link>
  </Header>
)

export default NoMatch;
