import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

//Post
export const getPosts = async () => {
  const resposta = await api.get('/post')
  return resposta.data
}

export const postPost = async (body) => {
  const resposta = await api.post('/post', body)
  return resposta.data
}

export const deletePost = async (idPost) => {
  try {
    const resposta = await api.delete(`/post/${idPost}`)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}
