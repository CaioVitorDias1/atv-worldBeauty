import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"

class Header extends Component{
    render(){

        return(
            <div className="divprincipal">
                <h1 className="headertit">World Beauty</h1>
                <nav>
                    <button className="botaoheader"> <Link to="/" style={{ textDecoration: 'none' }}>Home</Link> </button>
                    
                </nav>
            </div>
        )
    }
}

export default Header