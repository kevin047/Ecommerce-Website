import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import authReducer from "./store/store.js"

import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Login from './components/Login.jsx';
import Create from './components/Create.jsx';
import Account from './components/Account/Account.jsx';
import MyAccount from './components/Account/scenes/MyAccount.jsx';
import MyOrders from './components/Account/scenes/MyOrders.jsx';
import MyWishList from './components/Account/scenes/MyWishList.jsx';
import AddressBook from './components/Account/scenes/AddressBook.jsx';
import AddressEdit from './components/Account/scenes/AddressEdit.jsx';
import AccountInfo from './components/Account/scenes/AccountInfo.jsx';
import ContactUs from './components/ContactUs.jsx';
import Faqs from './components/Faqs.jsx';
import AboutUs from './components/AboutUs.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsConditions from './components/TermsConditions.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path='products/:id' element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<Create />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="faq" element={<Faqs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="term-condition" element={<TermsConditions />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="account" element={<Account />} >
            <Route path="" element={<MyAccount />}/>
            <Route path="orders" element={<MyOrders />}/>
            <Route path="wishlist" element={<MyWishList />}/>
            <Route path="address" element={<AddressBook />} />
            <Route path="address/edit/:id" element={<AddressEdit />} />
            <Route path="address/edit/new" element={<AddressEdit />} />
            <Route path="account/edit" element={<AccountInfo />} />
          </Route>
          
          {/* <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
          <Route path='products/:id' element={<ProductPage />}></Route>
          <Route path="checkout" element={<Checkout />}></Route> */}
      </Route>
  )
);


// const store = configureStore({
//   reducer: authReducer
// })

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [
                  FLUSH,
                  REHYDRATE,
                  PAUSE,
                  PERSIST,
                  PURGE,
                  REGISTER,
              ],
          },
      }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
   </React.StrictMode>,
)
