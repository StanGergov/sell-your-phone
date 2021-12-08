import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/authContext';
import Header from "./components/HeaderComponent/Header";
import Home from './components/HomeComponent/Home';
import AllPhones from './components/AllPhonesComponent/AllPhones';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/FooterComponent/Footer';
import Create from './components/CreateComponent/Create';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main className="site-content">
          <Routes>

            < Route path="/" element={<Home />} />
            < Route path="/allphones" element={<AllPhones />} />
            < Route path="/create" element={<Create />} />
            < Route path="/login" element={<Login />} />
            < Route path="/register" element={<Register />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;