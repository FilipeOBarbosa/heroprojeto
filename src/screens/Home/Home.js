import React from "react"
import 'bootswatch/dist/lux/bootstrap.css';
import './Home.css'
import Footer from "../../components/FooterComponent"
import {withRouter} from "react-router-dom"
class Home extends React.Component{

    render(){
      return (
          <div className="Home">
                <header className="Home-header">
                <h1>Bem-Vindo!</h1>
                <p>
                  Projeto desenvolvido para a diciplina de Desenvolvimento de aplicações corporativas<br></br>
                  Curso Analise e desenvolvimento de sistemas - IFPB Campus Monteiro
                </p>
                <Footer></Footer>
                </header>
          </div>
      )
    }
} 

export default withRouter (Home);