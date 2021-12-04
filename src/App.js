import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/HeaderComponent/Header";
import Home from './components/HomeComponent/Home';
import Footer from './components/FooterComponent/Footer';

function App() {
  return (
    <div className="App">
     <Header />

     <Home />

     <Footer />
    </div>
  );
}

export default App;
