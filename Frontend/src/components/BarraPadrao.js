import React, { Component } from 'react';
import {Button} from 'reactstrap' 

class BarraPadrao extends Component {
    render() {
        return (
           <div className="">    
                <nav className="navbar fixed-top" > 
                    <img className="navbaricon" src="../assets/heloo_PROJECTS.png" alt="helooprojects"/>
                    <a href="/"><Button color="" ><img className="sair" src="../assets/outline_logout_white_24dp.png" alt="Sair"/></Button></a>
                </nav>

           </div>
        );
    }
}

export default BarraPadrao