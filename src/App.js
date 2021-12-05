import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';

import Header from "./components/HeaderComponent/Header";
import Home from './components/HomeComponent/Home';
import AllPhones from './components/AllPhones/AllPhones';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/FooterComponent/Footer';

function App() {
  return (
    <div className="App">
     <Header />

     < Route path= "/" exact component= {Home} />
     < Route path= "/allphones" component= {AllPhones} />
     < Route path= "/login" component= {Login} />
     < Route path= "/register" component= {Register} />

     <Footer />
    </div>
  );
}

export default App;
