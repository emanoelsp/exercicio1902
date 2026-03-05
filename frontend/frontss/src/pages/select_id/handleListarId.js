import axios from "axios";

const BASE_URL = "http://localhost:3000/usuarios";

export async function buscarUsuarioPorId(id) {
  const response = await axios.get(`${BASE_URL}/listar_usuarios/${id}`);
  return response.data;
}
