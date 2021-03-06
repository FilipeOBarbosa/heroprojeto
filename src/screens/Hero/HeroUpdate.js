import React from 'react';
import'bootswatch/dist/lux/bootstrap.css';
import "./HeroUpdate.css";
import FormGroup from '../../components/FormGroup';
import Footer from '../../components/FooterComponent';
import Progressbar from '../../components/ProgressBar';
import axios from 'axios';

export default class HeroUpdate extends React.Component{

    state={
        id:0,
        nome:'',
        classe:'',
        level:0
      }

      twoFuncion=() =>{
          this.clicou();
          this._onButtonClick();
      }
      clicou=async() =>{
        await axios.put(`http://localhost:8080/api/hero/${this.state.id}`,{
          name: this.state.nome,
          characterClass: this.state.classe,
          level: parseInt(this.state.level),
    
        }).then(response =>{
          console.log(response)
        }).catch(error =>{
          console.log(error.response)
        });

        console.log("request finished");
        alert("Seu Heroi agora se chama "+this.state.nome+
        ", sua nova classe: "+this.state.classe+", seu level: "+this.state.level)
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
        <div className="HeroUpdate">
            <header className="HeroUpdate-header">
                <h1>Aqui você muda seu heroi</h1>
    
                <fieldset>
            <legend>Informações do herói</legend>
            <FormGroup label ="Id">
              <input type='id' className='form-control' id='inputId'
              placeholder='Digite seu id' value={this.state.id} onChange={(e) => this.setState({id: e.target.value})}></input>
            </FormGroup>
            <FormGroup label ="Nome">
              <input type='nome' className='form-control' id='inputName'
              placeholder='Digite seu nome' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}></input>
            </FormGroup>
            <FormGroup label ="Classe">
              <input type='classe' className='form-control' id='inputClasse'
              placeholder='Digite sua classe' value={this.state.classe} onChange={(e) => this.setState({classe: e.target.value})}></input>
            </FormGroup>
            <FormGroup label ="Level">
              <input type='level' className='form-control' id='inputLevel'
              placeholder='Digite seu level' value={this.state.level} onChange={(e) => this.setState({level: e.target.value})}></input>
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