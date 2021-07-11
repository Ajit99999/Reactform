
import './App.css';
import React from 'react';
import FormValidation from '../src/Component/FormValidation';
import Login from './Component/Login';
import Dashboard from './Component/DashBoard';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Router>  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Form</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='/login'> Login Page<span class="sr-only">(current)</span> </Link> 
      </li>
      <li class="nav-item">
        <Link  class="nav-link" to='/signin'>Registraion Page </Link> 
      </li>
      
      
    </ul>
    
  </div>
  <div>
  
  </div>
</nav>
<Route exact path = "/" component = {Login} />
                        <Route path = "/signin" component = {FormValidation} />
                        <Route path = "/login" component = {Login} />
                        <Route path = "/dashboard" component = {Dashboard} />

</Router>
  );
}

export default App;
