import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Applications from './components/Applications';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div>
      <Toaster />
      <Header></Header>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/loan-apply' element={
            <RequireAuth>
              <Form></Form>
            </RequireAuth>
          }></Route>
          <Route path='/applications' element={
            <RequireAuth>
              <Applications></Applications>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
