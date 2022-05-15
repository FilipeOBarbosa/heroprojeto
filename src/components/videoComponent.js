import React from 'react';

export default class videoComponent extends React.Component{
  
    render(){
      return ( 
          <div>
               <video id="background" autoPlay loop muted>
                   {this.props.children}
               </video>
          </div>
      );
    }
}