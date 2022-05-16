import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Hero from "../screens/Hero/Hero";
import Weapon from "../screens/Weapon/Weapon";
import HeroUpdate from "../screens/Hero/HeroUpdate";
import WeaponDelete from "../screens/Weapon/WeaponDelete";
import Home from "../screens/Login/Home";
import Login from "../screens/Login/Login";
function AppRoutes(){
    return(
        <BrowserRouter>
         <Route component={Login} path="/" exact/>
        <Route component={Hero} path="/CriarHeroi" />
        <Route component={Weapon} path="/Weapon" />
        <Route component={HeroUpdate} path="/HeroUpdate" />
        <Route component={WeaponDelete} path="/WeaponDelete" />
        <Route component={Home} path="/Home"/>
        </BrowserRouter>
    )
}
export default AppRoutes;