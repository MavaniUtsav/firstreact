import './App.css';
import Country from './Container/Country';
import City from './Container/City';
import Counter from './Container/Counter';
import CountryFun from './Container/CountryFun';
import CounterFun from './Container/CounterFun';
import Medicines from './Container/Medicines';
import LifeCycleMethod from './Container/LifeCycleMethod';

function App() {
  return (
    <div className="App">
      {/* <Country /> */}
      {/* <Counter /> */}
      {/* <CountryFun /> */}
      {/* <Medicines /> */}
      <LifeCycleMethod name="Australia"/>
    </div>
  );
}

export default App;
