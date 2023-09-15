import './App.css';
import Country from './Container/Country';
import City from './Container/City';
import Counter from './Container/Counter';
import CountryFun from './Container/CountryFun';
import CounterFun from './Container/CounterFun';
import Medicines from './Container/Medicines';
import LifeCycleMethod from './Container/LifeCycleMethod';
import Clock from './Container/Clock';
import ClockFun from './Container/ClockFun';
import Quotes from './Container/Quotes';
import Product from './Container/ProductPage';
import QuotesSearch from "./Container/QuotesSearch";

function App() {
  return (
    <div className="App">
      {/* <Country /> */}
      {/* <Counter /> */}
      {/* <CountryFun /> */}
      {/* <Medicines /> */}
      {/* <LifeCycleMethod name="Australia"/> */}
      {/* <Clock /> */}
      {/* <ClockFun /> */}
      {/* <Quotes /> */}
      <QuotesSearch />
      {/* <Product /> */}
    </div>
  );
}

export default App;
