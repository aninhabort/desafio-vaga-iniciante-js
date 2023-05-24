import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [validCpf, setValidCpf] = useState(false)
  const [validPassword, setValidPassword] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const validateCpf = () => {
      const validate = /^\d{3}\d{3}\d{3}\d{2}$/.test(cpf)
      setValidCpf(validate)
    }
    validateCpf()

    const validatePassword = () => {
      const maxLength = 5
      const validate = (password.length > maxLength)
      setValidPassword(validate)
    }
    validatePassword()
  })

  const handleClick = () => {
    if (validCpf && validPassword) {
      navigate('/chat')
    }
  }

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="cpf">
        CPF
        <input type="text" className="cpf" name="cpf" onChange={(e) => handleChange(setCpf, e)} />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" className="password" name="password" onChange={(e) => handleChange(setPassword, e)} />
      </label>
      <button type="button" onClick={handleClick}>Login</button>
      <div>
        {!validCpf && (<span>CPF Inválido</span>)}
        {!validPassword && (<span>Senha Inválida</span>)}
      </div>
    </div>
  )
}

export default Login;