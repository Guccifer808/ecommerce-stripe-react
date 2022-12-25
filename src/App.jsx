import Pay from './Pay';
import Success from './Success';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pay' element={<Pay />}></Route>
        <Route path='/success' element={<Success />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
