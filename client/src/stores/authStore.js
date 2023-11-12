import { create } from 'zustand'
import axios from 'axios'

const useAuthStore = create((set) => ({
  user: null,
  auth: false,
  
  loginForm: {
    username: '',
    password: '',
    usernameSelected: false,
    passwordSelected: false,
    type: 'password',
    valid: true
  },

  handleLoginFormChange: (e) => {
    const {name, value} = e.target

    set(state => ({
      loginForm: {
        ...state.loginForm,
        [name]: value
      }
    }))
  },

  handleLoginFormSelected: (e) => {
    const { name } = e.target

    if (name === 'username') {
      set(state => ({
        loginForm: {
          ...state.loginForm,
          usernameSelected: true
        }    
      }))
    } else {
      set(state => ({
        loginForm: {
          ...state.loginForm,
          passwordSelected: true
        }    
      }))
    }
},

  handleLoginFormBlur: (e) => {
    const { name } = e.target

    if (name === 'username') {
      set(state => ({
        loginForm: {
          ...state.loginForm,
          usernameSelected: false
        }    
      }))
    } else {
      set(state => ({
        loginForm: {
          ...state.loginForm,
          passwordSelected: false
        }    
      }))
    }
  },

  changePasswordType: () => {
    set(state => ({
      loginForm: {
        ...state.loginForm,
        type: state.loginForm.type === 'password' ? 'text' : 'password'
      }
    }))
  },

  login: async () => {
    try {
      const { username, password } = useAuthStore.getState().loginForm

      const response = await axios.post('/v0/user/login', { username, password })
 
      set(state => ({
        loginForm: {
          ...state.loginForm,
          username: '',
          password: ''
        },
        user: response.data.user,
        auth: true
      }))
    } catch (error) {
      set({ loginForm: { valid: false } })

      set(state => ({
        loginForm: {
          ...state.loginForm,
          username: '',
          password: ''
        }
      }))
    }
  }
}))

export default useAuthStore
