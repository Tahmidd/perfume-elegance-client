import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header></Header>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

        </Routes>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
