import React from 'react';
import "./Weapon.css";
import FormGroup from '../../components/FormGroup';
import 'bootswatch/dist/lux/bootstrap.css';
import Footer from "../../components/FooterComponent"
import video from "../.././video/WeaponBackground.mp4";
import Video from "../../components/videoComponent";
import axios from 'axios';

export default class Weapon extends React.Component{

  state={
    nome:''
  }

  clicou= async() =>{
    await axios.post('http://localhost:8080/api/weapon',{
      name: this.state.nome,

    }).then(response =>{
      console.log(response)
    }).catch(error =>{
      console.log(error.response)
    });

    console.log("request finished");
    alert("Sua arma se chama "+this.state.nome)
  }
    render(){
        return ( 
          <div className="Weapon">
            <header className="Weapon-header">
            <Video>
            <source src={video} type="video/mp4"></source>
          </Video>
            <h1>Crie sua arma!</h1>
            <fieldset>
            <FormGroup label ="">
              <input type='nome' className='form-control' id='inputName'
              placeholder='Arma' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}></input>
            </FormGroup>
            <button type="button" class="btn btn-primary" onClick={this.clicou}>CRIAR</button>
            </fieldset>

            <Footer/>
            </header>  
          </div>
    );
    }
}