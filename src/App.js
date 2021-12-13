import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/authContext';
import Header from "./components/HeaderComponent/Header";
import Home from './components/HomeComponent/Home';
import AllPhones from './components/AllPhonesComponent/AllPhones';
import Myphones from './components/MyPhonesComponent/Myphones';
import Login from './components/LoginComponent/Login';
import Register from './components/Register/Register';
import Logout from './components/LogoutComponent/Logout';
import Footer from './components/FooterComponent/Footer';
import Create from './components/CreateComponent/Create';
import Details from './components/DetailsComponent/Details';
import Edit from './components/EditComponent/Edit';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main className="site-content">
          <Routes>

            < Route path="/" element={<Home />} />
            < Route path="/allphones" element={<AllPhones />} />
            < Route path="/myphones" element={<Myphones />} />
            < Route path="/create" element={<Create />} />
            < Route path="/details/:phoneId" element={<Details />} />
            < Route path="/edit/:phoneId" element={<Edit />} />
            < Route path="/login" element={<Login />} />
            < Route path="/logout" element={<Logout />} />
            < Route path="/register" element={<Register />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;