import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder'

function Navabr(){

    const [expande, setExpande] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpande(false);
    },[location]);

    return(
    <div className="navbar" id={expande ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() =>{
                setExpande((prev) => !prev);
            }}> 
            <ReorderIcon/> 
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience">  Experience</Link>
        </div>
    </div>
    );
}

export default Navabr;