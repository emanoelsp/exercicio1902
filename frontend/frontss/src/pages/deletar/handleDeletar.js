import axios from "axios";

const BASE_URL = "http://localhost:3000/usuarios";

export async function buscarUsuarioPorId(id) {
  const response = await axios.get(`${BASE_URL}/listar_usuarios/${id}`);
  return response.data;
}

export async function deletarUsuario(id) {
  const response = await axios.delete(`${BASE_URL}/deletar_usuarios/${id}`);
  return response.data;
}

