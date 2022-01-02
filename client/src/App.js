import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Transactions from './components/Transactions';


function App() {
  return (
    <div className="min-h-screen">

      <div className='gradient-bg-welcome '>
        
        <Navbar/>
        <Welcome/>

      </div>

      <Services/>
      <Transactions/>
      <Footer/>

    </div>
  );
}

export default App;
