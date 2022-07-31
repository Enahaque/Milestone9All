import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="decoration-white capitalize decoration-1 hover:decoration-dashed decoration-wavy text-2xl hover:underline rounded-2xl font-mono">
        Hello world!!!
      </h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
