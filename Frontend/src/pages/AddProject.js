import React from 'react'
import BarraAdd from '../components/BarraAdd'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddProject = (props) => {
    return (
        <div>
            <BarraAdd />
            <div className="DivDoForm">
                <Form className="Formtest" >
                    <Row form>
                        <FormGroup>
                            <Label className="mt-sm-3">Nome do Projeto</Label>
                            <Input className="mb-1" type="text" name="name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Nome do Responsável</Label>
                            <Input type="text" name="name"></Input>
                        </FormGroup>
                       
                        <Col md={2}>
                                <Label>Valor: </Label>
                                <Input className="mb-1" type="number" placeholder="R$"> </Input>
                            </Col>
                        <FormGroup>
                            <Col md={4}><Label>Viabilidade</Label>
                                <Input className="mb-1"  type="select">
                                    <option selected></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </Input>
                                </Col>
                            <Col md={4}>
                                <Label>Data de início</Label>
                                <Input className="mb-1" type="date" name="description"></Input>
                            </Col>
                            <Col md={4}>
                                <Label>Data de término</Label>
                                <Input className="mb-1" type="date" name="description"></Input>
                            </Col>
                            <Col md={4}>
                                <Label>Situação</Label>
                                <Input className="mb-1" type="select">
                                    <option selected></option>
                                    <option value="">Concluido</option>
                                    <option value="">Cancelado</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label >Descrição</Label>
                            <Input className="mb-3" type="textarea" name="description"></Input>
                        </FormGroup>
                       
                    </Row>
                    <Button className="mb-3" color="light" type="submit">Enviar Novo Projeto</Button>
                </Form>
            </div>
        </div>
    )
}
export default AddProject