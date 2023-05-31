import Logo from '../images/logo.png'
import './Login.css'
import { useState } from 'react'

export default function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleEntrar = (event) => {
        event.preventDefault()
        alert(`Email: ${email}\nSenha: ${senha}`)
    }

    return(
            <>
                <img src={Logo} alt="" className='logo' />

                <section className='form' >
                    <div className='textos'>
                        <h1>Acesse a plataforma</h1>
                        <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                    </div>
                    <form onSubmit={handleEntrar}>
                        <label htmlFor="email">
                            <p>Email</p>
                            <input type="text" placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        </label>
                        <label htmlFor="senha">
                            <p>Senha</p>
                            <a href="">Esqueceu a senha?</a>
                            <input type="text" placeholder='Digite sua senha' value={senha} onChange={(event) => setSenha(event.target.value)} />
                        </label> 
                        <button type='submit'>Entrar</button>
                    </form>
                </section>
            </>
    )
}