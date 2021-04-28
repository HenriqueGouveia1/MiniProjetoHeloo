import '../styles/App.css';
import {Button} from 'reactstrap' 

function Home() {
  return (
    <div>
      <div className="Login">
        <img className="App-logo" src="../assets/heloo_PROJECTS.png" alt="helooprojects" />
        <div className="quadrado mb-5"><br/><br/>
            <a href="/feed"><Button color="light" >Clique aqui para entrar</Button></a>
          </div>
        </div>
    </div>

  );
}

export default Home;
