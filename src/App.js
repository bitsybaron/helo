import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes';
import Form from './components/Form/Form';
import {withRouter} from 'react-router';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        {(this.props.location.pathname !== '/') ? <Nav /> : ''}
        {routes}
      </div>
    );
  }
    
}

export default withRouter(App);
