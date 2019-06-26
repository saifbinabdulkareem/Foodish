import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard' 
import MenuDetails from './Components/Menus/MenuDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreateMenu from './Components/Menus/CreateMenu';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/menu/:id" component={MenuDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateMenu} />
      </Switch>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
