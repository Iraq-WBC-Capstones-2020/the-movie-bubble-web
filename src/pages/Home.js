import React from 'react';
import Logo from '../components/Logo/Logo'
import HamburgerMenu from '../components/HamburgerMenu/SidebarNav'
import Cards from '../components/MovieProjector/MovieProjector'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BubbleButton from '../components/BubbleButton'
import AuthorizationButton from '../components/AuthorizationButton'
import SlideCards from '../components/Sliders/Sliders'
export default function Home() {
  return (
    <div  >
            <div className="  h-full  bg-black">


      <Logo />
      <HamburgerMenu />
       <div className="grid grid-cols-3">
      <div  className="col-span-2">
      <SlideCards />
      <div className="relative ml-64  z-50 w-64 h-64  transform scale-150">
     <BubbleButton />
      </div>
      </div>

      <div className="col-span-1 mt-auto mb-auto">
      <AuthorizationButton/>

      </div>
      </div>
       {/*
      <AuthorizationButton/> */}
       {/* <BrowserRouter>
       <Switch>

       <Route exact path="/" component={LoginForm} />
          <Route path="/home/Register/" component={RegisterForm} />
          </Switch>
        </BrowserRouter> */}
   
  </div>
    </div>
  );
}
