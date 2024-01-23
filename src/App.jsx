import React from 'react'
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='' element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='users'>
              <Route index element={<List/>} />
              <Route path=':userid' element={<Single/>} />
              <Route path='new' element={<New/>} />
            </Route>
          </Route> 
        </Routes>
      </BrowserRouter> */}
      App
    </div>
  )
}

export default App;