import React, { useState, useEffect } from 'react';
// import {uuid} from 'uuidv4';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Pesquisa from '../components/Pesquisa'

export default function Lista() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(['']);
    const [flag, setFlag] = useState('');

    async function onLoginSubmit(e) {
        e.preventDefault();
        if(!email){
            setError('Digite seu email.');
            return;
        }
        if(!password){
            setError('Digite sua senha.');
            return;
        }
        try {
            const res = await axios.post('https://reqres.in/api/login', {"email": email,
        "password": password});
            localStorage.setItem("@C6Bank:token", res.data.token);
            console.log(res.data);
            setError('');
            setFlag(localStorage.getItem(`@C6Bank:token`));
        } catch{
            setError('Login/Senha inválida!');
            return;
        }    
    }

    useEffect(() => {
        setFlag(localStorage.getItem(`@C6Bank:token`));
    },[])
    
    function onSair(){
        localStorage.removeItem(`@C6Bank:token`)
        alert('Usuário deslogado!');
        setFlag(null)
    }

    return (
        <div className="form-user">
                <h1 id="h1criarconta">Fazer login: </h1>
                <Link to="/" className="botao" >Voltar</Link>
            
            <form onSubmit={onLoginSubmit}>
                <label htmlFor="email">E-mail: </label>
                <input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha: </label>
                <input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                
            </form>
            <button className="botao-sair"onClick={onSair} >Sair</button>

            {error&&<span  className="erro-form">{error}</span>}

            

            
            {flag && <Pesquisa />}
        </div>
    );
}