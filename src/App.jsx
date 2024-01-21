import Home from "./pages/home/Home";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='users'>
            <Route path='' element={<List/>} />
            <Route path=':userid' element={<Single/>} />
            <Route path='new' element={<New/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;