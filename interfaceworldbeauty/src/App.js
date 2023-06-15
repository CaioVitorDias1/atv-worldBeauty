import { Link } from "react-router-dom";
import Header from "./components/header";
import Cadastro from "./pages/cadastro";
import "./styles/home.css"

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Bem vindo ao sistema WorldBeauty!</h1>
      <h2>Qual operação gostaria de realizar primeiro?</h2>
      <div className="botaoshome">
        <button className="botaohome" ><Link to="cadastro" style={{ textDecoration: 'none' }}>Cadastro</Link></button>
        <button className="botaohome b2"><Link to="listagem" style={{ textDecoration: 'none' }}>Listagem</Link></button>
      </div>
    </div>
  );
}

export default App;
