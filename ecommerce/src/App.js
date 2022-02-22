import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Footer from './Footer';
import About from './About';
import Orders from './Orders';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Imi7HD8suU8NPcrvNXVYhb32H8idrK0f8gEGOcm6sT8LnDkpSbkDnBh6jmjYOvqQo2RovRkkVIZAYaFkvlUIhF600WYGCZgva');

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('USER IS ', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  }, [])
  return (
    <div className="page-container">
    <Router>
    <div className="app">
     <Switch>
     <Route path="/about">
           <Header />
           <About />
           <Footer/>
     </Route>

     <Route path="/orders">
           <Header />
           <Orders />
           <Footer/>
     </Route>

       <Route path ="/login">
       <Header />
       <Login />
       <Footer/>
       </Route>

       <Route path ="/payment">
       <Header />
       <Elements stripe={promise}>
       <Payment />
       </Elements>
       <Footer/>
       </Route>
       
     <Route path="/checkout">
           <Header />
           <Checkout />
           <Footer/>
     </Route>

     <Route path="/">
           <Header />
           <Home />
           <Footer/>
     </Route>
     
     </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
