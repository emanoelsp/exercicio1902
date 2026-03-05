import axios from "axios";

const BASE_URL = "http://localhost:3000/usuarios";

export async function listarUsuarios() {
  const response = await axios.get(`${BASE_URL}/listar_usuarios`);
  return response.data || [];
}

