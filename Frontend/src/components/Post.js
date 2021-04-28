import { Card, Row, Col, CardBody, CardText, Button, CardTitle, CardHeader, CardFooter } from 'reactstrap'
import Axios from 'axios'
import { React, useState } from 'react'

function Post() {
  const [projectList, setProjectList] = useState([]);

  const pegarProjeto = () => {
    Axios.get('http://localhost:3030/getProject').then((response) => {
      setProjectList(response.data)
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
              <a href="/editarProjeto"> <Button color="info">Editar Informações do projeto</Button><br /></a>
            </Card>

          </div>
        )
      })}


    </div>
  );
}

export default Post;
