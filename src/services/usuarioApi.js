import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

//Usuario
export const loginUsuario = async (email, senha) => {
  try {
    const config = {
      headers: {
        'X-Password': senha,
      },
    };

    const resposta = await api.post('/login', { email }, config);

    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      };
    } else {
      return {
        message: 'Erro inesperado',
      };
    }
  }
};

export const postUsuario = async (body, senha) => {
  const config = {
    headers: {
      'X-password': senha,
    },
  }
  const resposta = await api.post('/usuarios', body, config)
  return resposta.data
}