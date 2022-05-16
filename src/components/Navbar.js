import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav">
              <NavbarItem href='/' label='Login'></NavbarItem>
                <NavbarItem href='/CriarHeroi' label='Criar Heroi'></NavbarItem>
                <NavbarItem href='/Weapon' label='Criar Arma'></NavbarItem>
                <NavbarItem href='/HeroUpdate' label='Mudar heroi'></NavbarItem>
                <NavbarItem href='/WeaponDelete' label='Excluir Arma'></NavbarItem>
                <NavbarItem href='/Home' label='Home'></NavbarItem>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;