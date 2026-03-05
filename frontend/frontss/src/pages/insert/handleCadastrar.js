import axios from "axios";

const BASE_URL = "http://localhost:3000/usuarios";

export async function cadastrarUsuario({ nome, sobrenome }) {
  const response = await axios.post(`${BASE_URL}/cadastrar_usuarios`, {
    nome,
    sobrenome,
  });
  return response.data;
}

