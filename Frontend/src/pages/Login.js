import '../styles/App.css';
import {Button} from 'reactstrap' 

function Login() {
  return (
    <div>
      <div className="Home">
        <img className="App-logo" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
        <div className="quadrado">
          <div className="form-floating mt-sm-5 mb-3">
            <input type="email" className="form-control" id="floatingInput"/>
            <label for="floatingInput">Login</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" />
            <label for="floatingPassword">Senha</label>
            </div>
            <a href="/posts"><Button color="light" >Entrar</Button></a>
            <a href="/cadastrar"><Button color="light" >Cadastrar</Button></a>
          </div>
        </div>
    </div>

  );
}

export default Login;
