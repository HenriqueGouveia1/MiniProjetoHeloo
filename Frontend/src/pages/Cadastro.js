import '../styles/App.css';
import {Button,Input,Label,Form} from 'reactstrap' 

function Cadastro() {
  return (
    <div>
      <div className="Home">
        <img className="App-logo" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
          <Form>
            <div className="form-floating mt-sm-5 mb-3">
                <Input type="email" className="form-control" id="floatingInput"/>
                <Label for="floatingInput">Email</Label>
            </div>
            <div className="form-floating mb-3">
                <Input type="text" className="form-control" id="floatingInput"/>
                <Label for="floatingInput">Login</Label>
            </div>
            <div className="form-floating">
                <Input type="password" className="form-control" id="floatingPassword" />
                <Label for="floatingPassword">Senha</Label>
            </div>
            
            <a href="/"><Button type="submit" color="light">Cadastrar</Button></a>
          
          </Form>
        </div>
    </div>

  );
}

export default Cadastro;
