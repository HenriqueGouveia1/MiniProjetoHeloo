import React, { Component } from 'react';
import {Nav, Button, Input,FormGroup } from 'reactstrap'


class BarraPadrao extends Component {
    render() {
        return (
            <div className="">
                <Nav className="navbar " >
                    <img className="navbaricon" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
                    <FormGroup>  <Input className="InputPesquisar" type="Search" placeholder="Pesquisar" ></Input></FormGroup>
                    
                    <FormGroup className="form-control-sm">
                        <Input type="select" name="select" id="exampleSelect">
                            <option selected>Filtrar por: -----</option>
                            <option>Viabilidade</option>
                            <option>Data de início</option>
                            <option>Situação</option>    
                        </Input>
                    </FormGroup>
                        <a href="/AddProject"><Button color="light" className="mb-2">Adicionar Novo Projeto</Button></a>
                        <a href="/"><Button color="" ><img className="sair" src="../assets/outline_logout_white_24dp.png" alt="Sair" /></Button></a>
                </Nav>

            </div>
        );
    }
}

export default BarraPadrao