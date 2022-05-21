import React from 'react';
import'bootswatch/dist/lux/bootstrap.css';
import "./HeroDelete.css";
import FormGroup from '../../components/FormGroup';
import Footer from '../../components/FooterComponent';
import axios from 'axios';

export default class HeroDelete extends React.Component{

    state={
         id:0
      }
      clicou= async() =>{
        await axios.delete(`http://localhost:8080/api/hero/${this.state.id}`,{
        }).then(response =>{
          console.log(response)
        }).catch(error =>{
          console.log(error.response)
        });
        console.log("request finished");
        alert("esse heroi foi excluida: "+this.state.id)
      }


    render(){
        return ( 
        <div className="HeroDelete">
            <header className="HeroDelete-header">
            <h1>Deixe essa Jornada!</h1>
    
         <fieldset>
                <FormGroup label ="Qual o Heroi?">
                <input type='nome' className='form-control' id='inputId'
                placeholder='Digite o id do heroi' value={this.state.id} onChange={(e) => this.setState({id: e.target.value})}></input>
                </FormGroup>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={this.clicou}>EXCLUIR</button>
        </fieldset>
          <Footer/>
            </header>
        </div>);
    }
}