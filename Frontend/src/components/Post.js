import { Card, Input, Label, CardText, Button, CardTitle, CardHeader, CardFooter, FormGroup, Row } from 'reactstrap'
import Axios from 'axios'
import { React, useState } from 'react'

function Post() {
  const [projectList, setProjectList] = useState([]);
  const [show, setShow] = useState(false)

  const [newDesc, setNewDesc] = useState("")
  const [newViability, setNewViability] = useState(0)
  const [newSituation, setNewSituation] = useState("")

  const [filtro, setFiltro] = useState("viability")

  const pegarProjeto = () => { 

    if (filtro === "viability") {
      Axios.get('http://localhost:3030/getProject').then((response) => {
      setProjectList(response.data)
    })
    } else if (filtro === "dataDoInicio") {
      Axios.get('http://localhost:3030/getProjectByDate').then((response) => {
      setProjectList(response.data)
    })
    } else if (filtro === "situacao") {
      Axios.get('http://localhost:3030/getProjectBySituation').then((response) => {
      setProjectList(response.data)
    })
    }
  }

  const updateProject = (id) => {
    Axios.put('http://localhost:3030/editarProjeto', { id: id, desc: newDesc, viability: newViability, situation: newSituation })
      .then((response) => {
        setProjectList(projectList.map((val) => {
          return val.id === id ? {
            nome: val.nome,
            desc: newDesc,
            nomeResp: val.nomeResp,
            viability: newViability,
            dataDoFim: val.dataDoFim,
            dataDoInicio: val.dataDoInicio,
            valor: val.valor,
            situation: newSituation
          } : val
        }))
      })
  }
 
  return (
    <div >
      
        <FormGroup className="form-control-sm">
          <Input className="editButton" type="select" name="select" id="exampleSelect" onChange={(event) => {setFiltro(event.target.value)}}>
            <option selected disabled defaultValue="">Filtrar por: -----</option>
            <option value="viability">Viabilidade</option>
            <option value="dataDoInicio">Data de início</option>
            <option value="situation">Situação</option>
          </Input>
        </FormGroup>

        <Button className="butaoaquele" onClick={pegarProjeto} >Mostrar projetos</Button>
        {projectList.map((val, key) => {
          return (
            <div className="container ">
              <br />
              <Card body >
                <CardHeader>Data de criação: {val.createdAt}</CardHeader>
                <CardTitle>Nome do projeto: {val.nome}</CardTitle>
                <Card>Nome do Responsavel: {val.nomeResp}</Card>
                <CardText>Descrição: {val.desc}</CardText>
                <Card>Situação: {val.situation}</Card>
                <Card>Data do início: {val.dataDoInicio}</Card>
                <Card>Data do Fim: {val.dataDoFim}</Card>
                <Card>Viabilidade: {val.viability}</Card>
                <CardFooter>R$: {val.valor}</CardFooter>
                
                { val.situation === "Em adamento" && 
                
                  <Button color="info" onClick={() => setShow(!show)}>Editar projeto</Button>

                }
                                
                {show ? <div className="">
                  <br />
                  <Label>Descrição</Label>
                  <Input type="textarea" onChange={(event) => { setNewDesc(event.target.value) }}></Input>
                  <Label>Viabilidade</Label>
                  <Input className="mb-1" type="select" onChange={(event) => { setNewViability(event.target.value) }}>
                    <option selected></option>
                    <option value='1'>1</option>
                    <option value='2' >2</option>
                    <option value='3' >3</option>
                    <option value='4' >4</option>
                    <option value='5' >5</option>
                  </Input>

                  <Label>Situação</Label>
                  <Input className="mb-1" type="select" onChange={(event) => { setNewSituation(event.target.value) }}>
                    <option selected></option>
                    <option value="Concluido">Concluido</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Em adamento">Em adamento</option>
                  </Input>

                  <Button type="submit" onClick={() => { updateProject(val.id) }}>Enviar mudanças</Button>
                </div> : null}

              </Card>

            </div>
          )
        })}

     
    </div>
  );
}

export default Post;
