import '../styles/App.css';
import {Button,Input,Label,Form} from 'reactstrap' 
import { useState } from 'react';
import Axios from "axios";

function Cadastro() {
  
  const [email,setEmail] = useState("");
  const [login,setLogin] = useState("");
  const [senha,setSenha] = useState("");
 
  const testeButton = () =>{
      console.log(email);
  }
  
  const addUser = () => {
    Axios.post("http://localhost:3001/cadUser",{
      email: email,
      login: login,
      senha: senha,
    }).then(()=>{
      console.log('nice')
    })
  }

  return (
    <div>
      <div className="Login">
        <img className="App-logo" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
          
          <Form >
            <div className="form-floating mt-sm-5 mb-3">
                <Input type="email" className="form-control"  
                  onChange={(event)=>{setEmail(event.target.value)}} />
                <Label for="floatingInput">Email</Label>
            </div>
            <div className="form-floating mb-3">
                <Input type="text" className="form-control" 
                onChange={(event)=>{setLogin(event.target.value)}} />
                <Label for="floatingInput">Login</Label>
            </div>
            <div className="form-floating">
                <Input type="password" className="form-control"
                onChange={(event)=>{setSenha(event.target.value)}} />
                <Label for="floatingPassword">Senha</Label>
            </div>          
          <button onClick={addUser} color="light">Cadastrar</button>
          </Form>
        </div>
    </div>

  );
}

export default Cadastro;
