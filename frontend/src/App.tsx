import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Company from './pages/Company/List';
import FormCompany from './pages/Company/Form';

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/company' element={<Company />} />
            <Route path='/newCompany' element={<FormCompany />} />
            <Route path="/editCompany/:id" element={<FormCompany />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;