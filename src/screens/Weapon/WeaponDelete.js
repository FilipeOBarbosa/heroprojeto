import React from 'react';
import'bootswatch/dist/lux/bootstrap.css';
import "./WeaponDelete.css";
import FormGroup from '../../components/FormGroup';
import Footer from '../../components/FooterComponent';
import axios from 'axios';

export default class WeaponDelete extends React.Component{

    state={
         id:0
      }
      clicou= async() =>{
        await axios.delete(`http://localhost:8080/api/weapon/${this.state.id}`,{
        }).then(response =>{
          console.log(response)
        }).catch(error =>{
          console.log(error.response)
        });
        console.log("request finished");
        alert("essa arma foi excluida da sua bolsa: "+this.state.id)
      }


    render(){
        return ( 
        <div className="WeaponDelete">
            <header className="WeaponDelete-header">
            <h1>Jogue essa arma fora</h1>
    
         <fieldset>
                <FormGroup label ="Qual a arma?">
                <input type='nome' className='form-control' id='inputName'
                placeholder='Digite o id/nome da arma' value={this.state.id} onChange={(e) => this.setState({id: e.target.value})}></input>
                </FormGroup>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={this.clicou}>LARGAR</button>
        </fieldset>
          <Footer/>
            </header>
        </div>);
    }
}