import React from 'react';

export default class progressbar extends React.Component{
  
    render(){
        return (
        <div class="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-local" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
      </div>
      );
    }
}