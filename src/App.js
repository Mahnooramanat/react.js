import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Menu from './components/List group';
function App() {
  return (
    <>
<Header/>
<p>Hello Guyz!Welcome to QuickBite Fast Food, where flavor meets speed!<br></br> At QuickBite, we’re dedicated to serving delicious, high-quality meals<br></br> made from the freshest ingredients.</p>
<Cards/>
<Menu/>
</>
  );
}

export default App;