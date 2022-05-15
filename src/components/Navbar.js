import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav">
                <NavbarItem href='/' label='Criar Heroi'></NavbarItem>
                <NavbarItem href='/Weapon' label='Criar Arma'></NavbarItem>
                <NavbarItem href='/HeroUpdate' label='Mudar heroi'></NavbarItem>
                <NavbarItem href='/WeaponDelete' label='Excluir Arma'></NavbarItem>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;