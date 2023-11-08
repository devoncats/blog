import { useState } from 'react'
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom'

export default function useLoginForm () {
  const store = authStore()
  const navigate = useNavigate()

  const [emailSelected, setEmailSelected] = useState(false)
  const [passwordSelected, setPasswordSelected] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [type, setType] = useState('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changePasswordType = () => {
    setPasswordVisible(!passwordVisible)
    passwordVisible ? setType('password') : setType('text')
  }

  const handleEmailSelected = (e) => {
    e.preventDefault()
    setEmailSelected(true)
  }

  const handlePasswordSelected = (e) => {
    e.preventDefault()
    setPasswordSelected(true)
  }

  const handleEmailBlur = (e) => {
    e.preventDefault()
    setEmailSelected(false)
  }

  const handlePasswordBlur = (e) => {
    e.preventDefault()
    setPasswordSelected(false)
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await store.login(email, password)
    if (store.auth) navigate('/')
  }

  return {
    emailSelected,
    passwordSelected,
    passwordVisible,
    type,
    email,
    password,
    changePasswordType,
    handleEmailSelected,
    handlePasswordSelected,
    handleEmailBlur,
    handlePasswordBlur,
    handleEmail,
    handlePassword,
    handleSubmit
  }
}
