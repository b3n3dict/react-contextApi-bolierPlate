
import './App.css';
import Header from './Components/Header/Header';
import Cart from './context/Cart/cartContex';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Cart>
      <Header />
      <Home/>
      </Cart>
    </div>
  );
}

export default App;
