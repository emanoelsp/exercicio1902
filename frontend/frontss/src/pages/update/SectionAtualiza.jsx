import { useState } from "react";
import { buscarUsuarioPorId, atualizarUsuario } from "./handleAtualizar";
import "./styles.css";

function SectionAtualiza() {
  const [idBusca, setIdBusca] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const handleBuscar = async () => {
    const encontrado = await buscarUsuarioPorId(idBusca);
    setUsuario(encontrado);
    setNome(encontrado.nome || "");
    setSobrenome(encontrado.sobrenome || "");
  };

  const handleAtualizar = async (event) => {
    event.preventDefault();
    if (!usuario) return;
    const atualizado = await atualizarUsuario(usuario.id, { nome, sobrenome });
    setUsuario(atualizado);
    navigate("/usuarios");
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Atualizar usuário</h1>
      <div className="form search-row">
        <div className="input-group">
          <label htmlFor="idBusca">ID do usuário</label>
          <input
            id="idBusca"
            type="number"
            value={idBusca}
            onChange={(e) => setIdBusca(e.target.value)}
          />
        </div>
        <button type="button" className="button-primary" onClick={handleBuscar}>
          Buscar
        </button>
      </div>
      {usuario && (
        <form onSubmit={handleAtualizar} className="form">
          <p className="info-text">
            Editando usuário ID: <strong>{usuario.id}</strong>
          </p>

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
            Atualizar
          </button>
        </form>
      )}
    </section>
  );
}

export default SectionAtualiza;

