import './App.css';
import Country from './Container/Country';
import City from './Container/City';
// import Counter from './Container/Counter';
import CountryFun from './Container/CountryFun';
import CounterFun from './Container/CounterFun';
import LifeCycleMethod from './Container/LifeCycleMethod';
import Clock from './Container/Clock';
import ClockFun from './Container/ClockFun';
import Quotes from './Container/Quotes';
import Counter from './Components/Counter/Counter';
import { Provider } from 'react-redux';
import { configureStore } from './Redux/store';
import Medicines from './Components/Medicines/Medicines';
import { Route, Routes } from 'react-router';
import Cart from './Components/Cart/Cart';

function App() {
  let store = configureStore()

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          {/* <Country /> */}
          {/* <Counter /> */}
          {/* <CountryFun /> */}
          {/* <Medicines /> */}
          {/* <LifeCycleMethod name="Australia"/> */}
          {/* <Clock /> */}
          {/* <ClockFun /> */}
          {/* <Quotes /> */}
          {/* <Counter /> */}
          <Route exact path='/medicines' element={<Medicines />} /> 
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
