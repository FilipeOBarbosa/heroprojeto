import React from 'react';
import AppRoutes from './main/AppRoutes';
import Navbar from "./components/Navbar"


export default class App extends React.Component{
    render(){
        return ( 
          <div className="App">
              <Navbar/>
              <AppRoutes/>
          </div>
    );
    }
}