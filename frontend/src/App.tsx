import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Company from './pages/Company';
import FormCompany from './pages/FormCompany';

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/company' element={<Company />} />
            <Route path='/newCompany' element={<FormCompany />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;