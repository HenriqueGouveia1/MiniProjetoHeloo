import React, { useState } from 'react'
import BarraAdd from '../components/BarraAdd'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios'

function AddProject() {

    const [nome, setNome] = useState("");
    const [nomeResp, setNomeResp] = useState("");
    const [desc, setDesc] = useState("");
    const [valor, setValor] = useState();
    const [viability, setViability] = useState();
    const [dataDoInicio, setDataDoInicio] = useState();
    const [dataDoFim, setDataDoFim] = useState();
    const [situation, setSituation] = useState("");

    const addPost = () => {
        console.log('funcionou');
        Axios.post("http://localhost:3030/cadPost", {
            nome: nome,
            desc: desc,
            nomeResp: nomeResp,
            viability: viability,
            dataDoFim: dataDoFim,
            dataDoInicio: dataDoInicio,
            valor: valor,
            situation: situation
        }).catch(erro => console.log(erro))
    }

    return (
        <div>
            <BarraAdd />
            <div className="DivDoForm">
                <Form className="Formtest" >
                    <Row form>
                        <FormGroup>
                            <Label className="mt-sm-3">Nome do Projeto</Label>
                            <Input className="mb-1" type="text" name="nome"
                                onChange={(event) => { setNome(event.target.value)}}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Nome do Responsável</Label>
                            <Input className="mb-1" type="text" name="nomeResp"
                                onChange={(event) =>{ setNomeResp(event.target.value)}}></Input>
                        </FormGroup>

                        <Col md={2}>
                            <Label>Valor: </Label>
                            <Input className="mb-1" type="number" placeholder="R$"
                                onChange={(event) => { setValor(event.target.value) }} defaultValue=""> </Input>
                        </Col>
                        <FormGroup>
                            <Col md={4}><Label>Viabilidade</Label>
                                <Input className="mb-1" type="select" onChange={(event) => { setViability(event.target.value) }}>
                                    <option selected></option>
                                    <option value='1'>1</option>
                                    <option value='2' >2</option>
                                    <option value='3' >3</option>
                                    <option value='4' >4</option>
                                    <option value='5' >5</option>
                                </Input>
                            </Col>
                            <Col md={4}>
                                <Label>Data de início</Label>
                                <Input className="mb-1" type="date" name="data"
                                    onChange={(event) => { setDataDoInicio(event.target.value) }}></Input>
                            </Col>
                            <Col md={4}>
                                <Label>Data de término</Label>
                                <Input className="mb-1"  type="date" name="data"
                                    onChange={(event) => { setDataDoFim(event.target.value) }}></Input>
                            </Col>
                            <Col md={4}>
                                <Label>Situação</Label>
                                <Input className="mb-1" type="select" onChange={(event) => { setSituation(event.target.value) }}>
                                    <option selected></option>
                                    <option value="">Concluido</option>
                                    <option value="">Cancelado</option>
                                    <option value="">Em adamento</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label >Descrição</Label>
                            <Input className="mb-3" type="textarea" name="desc"
                                onChange={(event) => { setDesc(event.target.value) }}></Input>
                        </FormGroup>

                    </Row>
                    <Button className="mb-3" color="light" onClick={addPost}>Enviar Novo Projeto</Button>
                </Form>
            </div>
        </div>
    )
}
export default AddProject