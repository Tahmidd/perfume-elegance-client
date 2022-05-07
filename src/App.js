import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth/RequireAuth'
import InventoryDetail from './InventoryDetail/InventoryDetail';


function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header></Header>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/inventory/:inventoryId' element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>

        </Routes>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
