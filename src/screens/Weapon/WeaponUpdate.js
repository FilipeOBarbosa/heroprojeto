import React from 'react';
import'bootswatch/dist/lux/bootstrap.css';
import "./WeaponUpdate.css";
import FormGroup from '../../components/FormGroup';
import Footer from '../../components/FooterComponent';
import Progressbar from '../../components/ProgressBar';
import axios from 'axios';

export default class WeaponUpdate extends React.Component{

    state={
        id:0,
        nome:''
      }

      twoFuncion=() =>{
          this.clicou();
          this._onButtonClick();
      }
      clicou=async() =>{
        await axios.put(`http://localhost:8080/api/weapon/${this.state.id}`,{
          name: this.state.nome,
    
        }).then(response =>{
          console.log(response)
        }).catch(error =>{
          console.log(error.response)
        });

        console.log("request finished");
        alert("SSua weapon agora se chama "+this.state.nome)
      }

      constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }

    render(){
        return ( 
        <div className="WeaponUpdate">
            <header className="WeaponUpdate-header">
                <h1>Aqui você muda sua Arma</h1>
    
                <fieldset>
            <legend>Informações da Arma</legend>
            <FormGroup label ="Id">
              <input type='id' className='form-control' id='inputId'
              placeholder='Digite seu id' value={this.state.id} onChange={(e) => this.setState({id: e.target.value})}></input>
            </FormGroup>
            <FormGroup label ="Nome">
              <input type='nome' className='form-control' id='inputName'
              placeholder='Digite seu nome' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}></input>
            </FormGroup>
            <button type="button" className="btn btn-primary" onClick={this.twoFuncion}>MUDAR </button>
            {this.state.showComponent ?
           <Progressbar/> :
           null
        }
          </fieldset>
          
          <Footer/>
            </header>
        </div>);
    }
}