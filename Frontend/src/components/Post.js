import { Card, Input, Label, CardText, Button, CardTitle, CardHeader, CardFooter } from 'reactstrap'
import Axios from 'axios'
import { React, useState } from 'react'

function Post() {
  const [projectList, setProjectList] = useState([]);
  const [show, setShow] = useState(false)
  
  const [newDesc, setNewDesc] = useState("")
  const [newViability, setNewViability] = useState(0)
  const [newSituation, setNewSituation] = useState("")
  
  
  const pegarProjeto = () => {
    Axios.get('http://localhost:3030/getProject').then((response) => {
      setProjectList(response.data)
    })
  }

  const updateProject =(id) =>{
    Axios.put('http://localhost:3030/editarProjeto', {id: id, desc: newDesc, viability: newViability, situation: newSituation})
    .then((response) =>{
      setProjectList(projectList.map((val)=>{
        return val.id === id ? {nome: val.nome,
          desc: newDesc,
          nomeResp: val.nomeResp,
          viability: newViability,
          dataDoFim: val.dataDoFim,
          dataDoInicio: val.dataDoInicio,
          valor: val.valor,
          situation: newSituation}:val
        }))
    })
  }

  

  return (
    <div  >
      <Button block className="editButton" color="info" onClick={pegarProjeto} >Mostrar projetos</Button>
      {projectList.map((val, key) => {
        return (
          <div className="divDoPost">
            <br />
            <Card body >
              <CardHeader>Data de criação: {val.createdAt}</CardHeader>
              <CardTitle>{val.nome}</CardTitle>
              <Card>{val.nomeResp}</Card>
              <CardText>Descrição: {val.desc}</CardText>
              <Card>{val.situation}</Card>
              <Card>Data do início: {val.dataDoInicio}</Card>
              <Card>Data do Fim: {val.dataDoFim}</Card>
              <Card>Viabilidade: {val.viability}</Card>
              <CardFooter>R$: {val.valor}</CardFooter>


              <Button color="info" onClick={() => setShow(!show)}>Editar projeto</Button>
              {show ? <div className="">
                <br />
                <Label>Descrição</Label>
                <Input type="textarea" onChange={(event) => {setNewDesc(event.target.value) }}></Input>
                <Label>Viabilidade</Label>
                <Input className="mb-1" type="select" onChange={(event) => { setNewViability(event.target.value)}}>
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

                <Button type="submit" onClick={()=>{updateProject(val.id)}}>Enviar mudanças</Button>
              </div> : null}

            </Card>

          </div>
        )
      })}


    </div>
  );
}

export default Post;
