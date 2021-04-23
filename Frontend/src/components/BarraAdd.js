import React, { Component } from 'react';
import { Button, Nav } from 'reactstrap'


class BarraAdd extends Component {
    render() {
        return (
            <div className="">
                <Nav className="navbar" >
                    <img className="navbaricon" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
                      <h1 className="h1-newp">Novo Projeto</h1>
                       <a href="/">
                        <Button type="button" color="" >
                            <img className="sair" src="../assets/outline_logout_white_24dp.png" alt="Sair" />
                        </Button>
                       </a>
                </Nav>

            </div>
        );
    }
}

export default BarraAdd