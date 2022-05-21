import React from 'react';
import {withRouter} from 'react-router-dom';
import'bootswatch/dist/lux/bootstrap.css';
import "./WeaponFind.css";
import FormGroup from '../../components/FormGroup';
import Footer from '../../components/FooterComponent';
import axios from 'axios';
import WeaponsTable from '../../components/WeaponTable'


export default class WeaponFind extends React.Component{
    state={
        name: '',
        characterClass:'',
        id: '',
        weapons: []

    }

    delete = (weaponId) =>{
        axios.delete(`http://localhost:8080/api/weapon/${weaponId}`)
        .then(response =>{
            this.find();
        }).catch(error =>{
            console.log(error.response)
        });
    }

    edit =(weaponId) =>{
        this.props.history.push('/WeaponUpdate');
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

 
        
        axios.get(`http://localhost:8080/api/weapon/${params}`)
        .then(response => {
            const weapons = response.data;
            this.setState({weapons})
            console.log(weapons)
        }).catch(error =>{
            console.log(error.response);
        })
    }
        

    render(){
        return ( 
            <div className="WeaponFind">
                <header className="WeaponFind-header">
                    <fieldset className='WeaponFind-fieldset'>
                    <legend>Informações da Arma</legend>
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

                        <button onClick={this.find}
                            type = "button"
                            className='btn btn-primary'>
                            <i className='pi pi-search'></i>Buscar

                        </button>
                    </fieldset>
                    <fieldset className='WeaponFind-fieldset2'>
                            <WeaponsTable weapons={this.state.weapons}
                            delete={this.delete}
                            edit={this.edit}/>
                            </fieldset>
                </header>

                <Footer/>

            </div>
            
        )}
}
