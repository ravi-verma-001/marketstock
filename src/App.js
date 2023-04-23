
import './App.css';
import StockOne from './StockOne';
import StockTwo from './StockTwo';
import StockThree from './StockThree';
import StockFour from './StockFour';
import Frontpage from './Frontpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
      <Routes>
       
          <Route path="/" element = {<Frontpage/>}> </Route>
          <Route path="stockone" element = {<StockOne/>}> </Route>
          <Route path="stocktwo" element = {<StockTwo/>}> </Route>
          <Route path="stockthree" element = {<StockThree/>}> </Route>
          <Route path="stockfour" element = {<StockFour/>}> </Route>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
