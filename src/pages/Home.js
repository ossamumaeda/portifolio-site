import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../styles/Home.css'
function Home(){
    return(
    <div className="home">
        <div className="about">
            <h2>Meu nome é Gabriel Maeda</h2>
            <div className="prompt"> 
                <p>
                    Desenvolvedor Full Stack  bla bla bla
                    <LinkedInIcon/>
                    <GithubIcon/>
                </p>
            </div>
        </div>
        <div className="skills">
            <h1>
                Habilidades:
            </h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>ReactJs</span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>JavaScript</span>
                </li>
                <li className="item">
                    <h2>Linguagens</h2>
                    <span>C, Python, Java, JavaScript, C++</span>
                </li>
            </ol>
        </div>
    </div>
    
    );
}

export default Home;