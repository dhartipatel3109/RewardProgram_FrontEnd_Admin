import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/home/Home.jsx'
import Team from './pages/team/Team.jsx'
import Rewards from './pages/rewards/Rewards.jsx'
import Promotions from './pages/promotions/Promotions.jsx'
import RewardProgram from './pages/rewardProgram/RewardProgram.jsx'
import Customers from './pages/customers/Customers.jsx'
import Transactions from './pages/transactions/Transactions.jsx'
import Notify from './pages/marketing/notify/Notify.jsx'
import SendEmail from './pages/marketing/sendEmail/SendEmail.jsx'
import Store from './pages/setting/store/Store.jsx'
import Merchant from './pages/setting/merchant/Merchant.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
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
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)