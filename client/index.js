import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo'; 

import App from './components/App';

import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeDetail from './components/EmployeeDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id 
});

const Root = () => {
  return (
    <ApolloProvider client={client}> 
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={EmployeeList} />
          <Route path="employee/:id" component={EmployeeDetail} /> 
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
