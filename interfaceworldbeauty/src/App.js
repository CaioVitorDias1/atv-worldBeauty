import { Link } from "react-router-dom";
import Header from "./components/header";
import Cadastro from "./pages/cadastro";


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Bem vindo ao sistema WorldBeauty!</h1>
      <h2>Qual operação gostaria de realizar primeiro?</h2>

      <button><Link to="cadastro">Cadastro</Link></button>
      <button><Link to="listagem">Listagem</Link></button>

    </div>
  );
}

export default App;
