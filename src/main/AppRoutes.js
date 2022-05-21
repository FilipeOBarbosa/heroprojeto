import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Hero from "../screens/Hero/Hero";
import Weapon from "../screens/Weapon/Weapon";
import HeroUpdate from "../screens/Hero/HeroUpdate";
import HeroDelete from "../screens/Hero/HeroDelete";
import WeaponDelete from "../screens/Weapon/WeaponDelete";
import WeaponUpdate from "../screens/Weapon/WeaponUpdate";
import HeroFind from "../screens/Hero/HeroFind"
import WeaponFind from "../screens/Weapon/WeaponFind";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
function AppRoutes(){
    return(
        <BrowserRouter>
         <Route component={Home} path="/Home"/>
         <Route component={Login} path="/" exact/>
        <Route component={Hero} path="/CriarHeroi" />
        <Route component={Weapon} path="/Weapon" />
        <Route component={HeroUpdate} path="/HeroUpdate" />
        <Route component={HeroDelete} path="/HeroDelete" />
        <Route component={WeaponUpdate} path="/WeaponUpdate" />
        <Route component={WeaponDelete} path="/WeaponDelete" />
        <Route component={HeroFind} path="/HeroFind" />
        <Route component={WeaponFind} path="/WeaponFind" />
        </BrowserRouter>
    )
}
export default AppRoutes;