import React from "react";
import "./Login.css"
import 'bootswatch/dist/lux/bootstrap.css';
import Footer from "../../components/FooterComponent"
import FormGroup from "../../components/FormGroup"
import {withRouter} from "react-router-dom"

class Login extends React.Component{

    state={
        usuario:'',
        senha:''
    }

    clicou=() =>{
        console.log(this.state.usuario)
        console.log(this.state.senha)
        if(this.state.usuario == 'monteiro@ifpb.edu.br' && this.state.senha == '123'){
            this.props.history.push('/Home');
        }
        else{
            alert("Login inválido!")
        }
        
      }
    
    render(){
        return(
            <div className="Login">
                <header className="Login-header">
                    <h1>Continue sua Jornada</h1>
                    <FormGroup label ="">
                    <input type='usuario' className='form-control' id='inputUser'
                    placeholder='Usuario' value={this.state.usuario} onChange={(e) => this.setState({usuario: e.target.value})}></input>
                    </FormGroup>
                    <FormGroup label ="">
                    <input type='password' className='form-control' id='inputUser'
                    placeholder='Senha' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}></input>
                    </FormGroup>
                    <br></br>
                    <button type="button" className="btn btn-secondary" onClick={this.clicou}>Continuar</button>
                    
                </header>
            </div>
        )
    }
}

export default withRouter (Login);
