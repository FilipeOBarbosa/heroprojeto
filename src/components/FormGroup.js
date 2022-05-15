import React from 'react';

export default class FormGroup extends React.Component{
  
    render(){
      return ( 
          <div>
              <label htmlFor='input'>{this.props.label}</label>
              {this.props.children}
          </div>
      );
    }
}