import './App.css';
import Home from './Component/Home';
import Repos from './Component/Repos';
import {Route, Routes} from 'react-router-dom';
import Error from './Component/Error';
import NotFound from './Component/NotFound';

function App() {
  return (
    <Error>
      <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home />}>
            <Route path='repos' element={<Repos/>}/>
          </Route> 
      </Routes> 
    </Error>
  );
}

export default App;