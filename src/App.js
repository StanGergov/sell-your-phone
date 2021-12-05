import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';

import Header from "./components/HeaderComponent/Header";
import Home from './components/HomeComponent/Home';
import AllPhones from './components/AllPhonesComponent/AllPhones';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/FooterComponent/Footer';
import Create from './components/CreateComponent/Create';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>

        < Route path="/" exact component={Home} />
        < Route path="/allphones" component={AllPhones} />
        < Route path="/create" component={Create} />
        < Route path="/login" component={Login} />
        < Route path="/register" component={Register} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
