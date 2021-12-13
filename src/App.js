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
import GuardRoute from './components/Common/GuardRoute/GuardRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main className="site-content">
          <Routes>

            < Route path="/" element={<Home />} />
            < Route path="/allphones" element={<AllPhones />} />
            < Route path="/details/:phoneId" element={<Details />} />
            < Route path="/login" element={<Login />} />
            < Route path="/register" element={<Register />} />

            <Route element= {<GuardRoute />}>
              < Route path="/create" element={<Create />} />
              < Route path="/myphones" element={<Myphones />} />
              < Route path="/edit/:phoneId" element={<Edit />} />
              < Route path="/logout" element={<Logout />} />

            </Route>

          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;