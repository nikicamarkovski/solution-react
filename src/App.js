import React from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './scss/app.css';
import { Header } from './Components/Header';
import { News } from './Components/News';
import { Clients } from './Components/Clients';
import { ContactForm } from './Components/ContactForm';
import { Footer } from './Components/Footer';
import AuthState from './context/auth/AuthState';
import { HomePage } from './Components/Homepage/HomePage';
import { Login } from './Components/Login/Login';
import PrivateRoute from './Components/routing/PrivateRoute';
import { Users } from './Components/Users/Users';
import UsersState from './context/users/UsersState';



function App() {
  return (
    <div className="App">
      <AuthState>
        <UsersState>
        <Router>
       <Header/>
        <Switch>
      <Route  exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/users" component={Users} />
      </Switch>
      <Footer />
      </Router>
      </UsersState>
      </AuthState>
      
    </div>
  );
}

export default App;
