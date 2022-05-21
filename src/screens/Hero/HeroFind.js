import React from 'react';
import {withRouter} from 'react-router-dom';
import'bootswatch/dist/lux/bootstrap.css';
import "./HeroFind.css";
import FormGroup from '../../components/FormGroup';
import Footer from '../../components/FooterComponent';
import axios from 'axios';
import HerosTable from '../../components/HeroTable'


export default class HeroFind extends React.Component{
    state={
        name: '',
        characterClass:'',
        id: '',
        level: '',
        weapon: null,
        heros: []

    }

    delete = (heroId) =>{
        axios.delete(`http://localhost:8080/api/hero/${heroId}`)
        .then(response =>{
            this.find();
        }).catch(error =>{
            console.log(error.response)
        });
    }

    edit =(heroId) =>{
        this.props.history.push('/HeroUpdate');
    }

    find = () => {
        var params = '?';
        if(this.state.id != ''){
            if(params != '?'){
                params = `${params}&`;
            }
        params = `${params}id=${this.state.id}`;
        }

        if(this.state.name != ''){
            if(params != '?'){
                params = `${params}&`;
            }
        params = `${params}name=${this.state.name}`;
        }

        
        if(this.state.characterClass != ''){
            if(params != '?'){
                params = `${params}&`;
            }
        params = `${params}characterClass=${this.state.characterClass}`;
        }

        if(this.state.level != ''){
            if(params != '?'){
                params = `${params}&`;
            }
        params = `${params}level=${this.state.level}`;
        }
        
        axios.get(`http://localhost:8080/api/hero/${params}`)
        .then(response => {
            const heros = response.data;
            this.setState({heros})
            console.log(heros)
        }).catch(error =>{
            console.log(error.response);
        })
    }
        

    render(){
        return ( 
            <div className="HeroFind">
                <header className="HeroFind-header">
                    <fieldset className='HeroFind-fieldset'>
                    <legend>Informações do herói</legend>
                        <FormGroup htmlFor = "inputId" label="Id: *">
                            <input type="text"
                            className="form-control"
                            id="inputId"
                            value={this.state.id}
                            onChange={e => this.setState({id: e.target.value})}
                            placeholder="Digite o id"></input>
                        </FormGroup>
                        <FormGroup htmlFor = "inputName" label="Name: *">
                            <input type="text"
                            className="form-control"
                            id="inputName"
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value})}
                            placeholder="Digite o nome"></input>
                        </FormGroup>
                        <FormGroup htmlFor = "inputcharacterClass" label="CharacterClass: *">
                            <input type="text"
                            className="form-control"
                            id="inputcharacterClass"
                            value={this.state.characterClass}
                            onChange={e => this.setState({characterClass: e.target.value})}
                            placeholder="Digite a classe"></input>
                        </FormGroup>
                        <FormGroup htmlFor = "inputLevel" label="Level: *">
                            <input type="text"
                            className="form-control"
                            id="inputLevel"
                            value={this.state.level}
                            onChange={e => this.setState({level: e.target.value})}
                            placeholder="Digite o level"></input>
                        </FormGroup>

                        <button onClick={this.find}
                            type = "button"
                            className='btn btn-primary'>
                            <i className='pi pi-search'></i>Buscar

                        </button>
                    </fieldset>
                    <fieldset className='HeroFind-fieldset2'>
                            <HerosTable heros={this.state.heros}
                            delete={this.delete}
                            edit={this.edit}/>
                            </fieldset>
                </header>

                <Footer/>

            </div>
            
        )}
}
