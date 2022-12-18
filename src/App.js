import './App.css';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import CakeComponent from './components/cake/CakeComponent';
import IceCreamComponent from './components/icecream/IceCreamComponent';
import CakeComponentUsingHook from './components/cake/CakeComponentUsingHook';
import { useEffect } from 'react';
import UserComponent from './components/user/UserComponent';

function App() {
  useEffect(()=>{
    console.log('renderd')
  })
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeComponent/> */}
        <CakeComponentUsingHook/>
        <IceCreamComponent/>
        <UserComponent/>
      </div>
    </Provider>
  );
}

export default App;
