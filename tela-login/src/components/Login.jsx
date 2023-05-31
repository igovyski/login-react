import Logo from '../images/logo.png'
import Img from '../images/img.png'
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
            <main>
                <img src={Logo} alt="" className='logo' />
            
                <section className='form' >
                    <div className='textos'>
                        <h1>Acesse a plataforma</h1>
                        <p className='texto-login' >Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                    </div>
                    <form onSubmit={handleEntrar}>
                        <label htmlFor="email">
                            <p className='texto-form' >Email</p>
                            <input type="email" placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        </label>
                        <label htmlFor="senha">
                            <div className='div-senha'>
                                <p className='texto-form' >Senha</p>
                                <p><a href="">Esqueceu a senha?</a></p>
                            </div>
                            <input type="password" placeholder='Digite sua senha' value={senha} onChange={(event) => setSenha(event.target.value)} />
                        </label> 
                        <button type='submit'>Entrar</button>
                        <p className='texto-pos-botao' >Ainda não tem uma conta? <a href="">Inscreva-se</a></p> 
                    </form>
                </section>
            </main>
            </>
    )
}