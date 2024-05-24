
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Login/>

      </Router>
    </div>
  );
}

export default App;
