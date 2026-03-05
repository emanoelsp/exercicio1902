import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarUsuarioPorId, deletarUsuario } from "./handleDeletar";
import "./styles.css";

function SectionDeleta() {
  const navigate = useNavigate();
  const [idBusca, setIdBusca] = useState("");
  const [usuario, setUsuario] = useState(null);

  const handleBuscar = async () => {
      const encontrado = await buscarUsuarioPorId(idBusca);
      setUsuario(encontrado);
  };

  const handleDeletar = async () => {
      await deletarUsuario(usuario.id);
      navigate("/usuarios");
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Deletar usuário</h1>

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
        <div className="card">
          <p className="info-text">
            Confirme os dados do usuário antes de excluir:
          </p>
          <ul className="user-list">
            <li>
              <strong>ID:</strong> {usuario.id}
            </li>
            <li>
              <strong>Nome:</strong> {usuario.nome}
            </li>
            <li>
              <strong>Sobrenome:</strong> {usuario.sobrenome}
            </li>
          </ul>
          <button
            type="button"
            className="button-danger"
            onClick={handleDeletar}
          >
            Deletar usuário
          </button>
        </div>
      )}
    </section>
  );
}

export default SectionDeleta;

