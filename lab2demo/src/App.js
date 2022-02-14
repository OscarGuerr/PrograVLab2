import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Users from './users/pages/Users.js';

import MainNavigation 
  from './shared/components/Navigation/MainNavigation/MainNavigation.js';
import Counter from './shared/components/Counter/Counter.js';
import Sentence from './shared/components/Sentence/Sentence';



function App() {
  return (
    
    <Router>
      
      
      
      
      <MainNavigation /> 
      
      <main>
        <br/>
      <Counter />
      <Users />
      <Sentence/>
      </main>
    </Router>
  );
}


export default App;
