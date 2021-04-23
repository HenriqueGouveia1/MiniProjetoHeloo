import '../styles/App.css';
import {Button, Input, Label} from 'reactstrap' 

function Login() {
  return (
    <div>
      <div className="Login">
        <img className="App-logo" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
        <div className="quadrado">
          <div className="form-floating mt-sm-5 mb-3">
            <Input type="email" className="form-control" id="floatingInput"/>
            <Label for="floatingInput">Login</Label>
            </div>
            <div className="form-floating">
            <Input type="password" className="form-control" id="floatingPassword" />
            <Label for="floatingPassword">Senha</Label>
            </div>
            <a href="/feed"><Button color="light" >Entrar</Button></a>
            <a href="/cadastrar"><Button color="light" >Cadastrar</Button></a>
          </div>
        </div>
    </div>

  );
}

export default Login;
