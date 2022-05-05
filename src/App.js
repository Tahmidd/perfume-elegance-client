import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header></Header>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
