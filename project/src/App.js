import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Header/Profile';
import { Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path = "profile" render = {Profile} />
    </div>
  );
}

export default App;
