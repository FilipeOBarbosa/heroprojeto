import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Hero from "../screens/Hero/Hero";
import Weapon from "../screens/Weapon/Weapon";
import HeroUpdate from "../screens/Hero/HeroUpdate";
import WeaponDelete from "../screens/Weapon/WeaponDelete";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Route component={Hero} path="/" exact/>
        <Route component={Weapon} path="/Weapon" exact/>
        <Route component={HeroUpdate} path="/HeroUpdate" exact/>
        <Route component={WeaponDelete} path="/WeaponDelete" exact/>
        </BrowserRouter>
    )
}
export default AppRoutes;