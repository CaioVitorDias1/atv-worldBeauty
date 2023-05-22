import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){

        return(
            <div>
                <nav>
                    <button> <Link to="/">Home</Link> </button>
                </nav>
            </div>
        )
    }
}

export default Header