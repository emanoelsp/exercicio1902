import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "./handleCadastrar";
import "./styles.css";

function SectionCadastra() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const usuario = await cadastrarUsuario({ nome, sobrenome });
    navigate("/usuarios");
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Cadastro de usuário</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-primary">
          Cadastrar
        </button>
      </form>
    </section>
  );
}

export default SectionCadastra;

