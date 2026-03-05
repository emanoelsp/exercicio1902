import { useEffect, useState } from "react";
import { listarUsuarios } from "./handleListar";
import "./styles.css";

function SectionUser() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregar = async () => {
        const lista = await listarUsuarios();
        setUsuarios(lista);
    };
    carregar();
  }, []);

  return (
    <section className="page-container">
      <h1 className="page-title">Lista de usuários</h1>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nome}</td>
                  <td>{u.sobrenome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </section>
  );
}

export default SectionUser;

