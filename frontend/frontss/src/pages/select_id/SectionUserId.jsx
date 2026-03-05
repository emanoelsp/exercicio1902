import { useState } from "react";
import { buscarUsuarioPorId } from "./handleListarId";
import "./styles.css";

function SectionUserId() {
  const [idBusca, setIdBusca] = useState("");
  const [usuario, setUsuario] = useState(null);

  const handleBuscar = async () => {
    const encontrado = await buscarUsuarioPorId(idBusca);
    setUsuario(encontrado);
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Buscar usuário por ID</h1>

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
        </div>
      )}
    </section>
  );
}

export default SectionUserId;
