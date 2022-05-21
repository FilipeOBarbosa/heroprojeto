import React from 'react';
import './Hero.css';
import Video from "../../components/videoComponent"
import VideoYou from "../../components/VideoYoutubeComponent"
import Footer from "../../components/FooterComponent"
import videoplayer from "../.././video/Armor.mp4";
import 'bootswatch/dist/lux/bootstrap.css';
import FormGroup from '../../components/FormGroup';
import axios from 'axios';



export default class Hero extends React.Component{

  state={
    nome:'',
    classe:'',
    level: 0
  }

  clicou= async() =>{
    await axios.post('http://localhost:8080/api/hero',{
      name: this.state.nome,
      characterClass: this.state.classe,
      level: parseInt(this.state.level),
      weapon: null

    }).then(response =>{
      console.log(response)
    }).catch(error =>{
      console.log(error.response)
    });

    console.log("request finished");

    alert("Seu Heroi se chama "+this.state.nome+
    ", sua classe: "+this.state.classe+", seu level: "+this.state.level)

  }

  render(){
    return ( 
      <div className="Hero">
        <header className="Hero-header">
          <VideoYou/>
          <Video>
            <source src={videoplayer} type="video/mp4"></source>
          </Video>
          <h1>
            Inicie sua jornada!
          </h1>
          <p>
              Todos nós fazemos escolhas na vida,<br />
              mas no final nossas escolhas nos fazem.
          </p>
       
          <h2>
            Crie seu Héroi
          </h2>
          <fieldset>
            <legend>Informações do herói</legend>
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
            <button type="button" className="btn btn-primary" onClick={this.clicou}>INICIAR</button>
          </fieldset>
          <Footer/>
        </header> 
      </div>
    );
  }
}
