import { create } from 'zustand'
import axios from 'axios'

const authStore = create((set) => ({
  user: null,
  auth: false,

  login: async (username, password) => {
    try {
      const response = await axios.post('/v0/user/login', { input: username, password })
      set({ user: response.data })
      set({ auth: true })
    } catch (error) {
      if (error.response.data.error === 'User not found') console.log('works')
    }
  }
}))

export default authStore
