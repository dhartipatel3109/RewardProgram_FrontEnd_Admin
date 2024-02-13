import React from 'react'
import Layout from './Layout';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Team from './pages/team/Team'
import Rewards from './pages/rewards/Rewards'
import Promotions from './pages/promotions/Promotions'
import RewardProgram from './pages/rewardProgram/RewardProgram'
import Customers from './pages/customers/Customers'
import Transactions from './pages/transactions/Transactions'
import Notify from './pages/marketing/notify/Notify'
import SendEmail from './pages/marketing/sendEmail/SendEmail'
import Store from './pages/setting/store/Store'
import Merchant from './pages/setting/merchant/Merchant'
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            {/* PATH 1 => /login  */}
            <Route path='login' element={<Login/>} />

            {/* PATH 1 => /sign-up  */}
            <Route path='sign-up' element={<SignUp/>} />

            {/* PATH 2 => /store/**  */}
            <Route path='panel/' element={<Layout/>}>
              <Route path='dashboard' element={<Home/>} />
              <Route path='our-team' element={<Team/>} />
              <Route path='store-rewards' element={<Rewards />} />
              <Route path='store-promotions' element={<Promotions/>} />
              <Route path='ongoing-reward-program' element={<RewardProgram />} />
              <Route path='customers-list' element={<Customers />} />
              <Route path='transactions-detail' element={<Transactions />} />
              <Route path='marketing/'>
                <Route path='send-message' element={<SendEmail/>} />
                <Route path='notify-through-app' element={<Notify/>} />
              </Route>
              <Route path='settings/'>
                <Route path='store' element={<Store/>} />
                <Route path='merchant-account' element={<Merchant/>} />
              </Route>
            </Route>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;