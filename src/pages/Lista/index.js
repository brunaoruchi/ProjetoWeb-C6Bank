import React, { useState, useEffect } from 'react';
// import {uuid} from 'uuidv4';
import axios from 'axios';

import Pesquisa from '../components/Pesquisa'

export default function Lista() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [flag, setFlag] = useState('');

    async function onLoginSubmit(e) {
        e.preventDefault();
        if(!email){
            setError('Digite o email');
            return
        }
        if(!password){
            setError('Digite a senha');
            return
        }
        try {
            const res = await axios.post('https://reqres.in/api/login', {"email": email,
        "password": password});
            localStorage.setItem("@C6Bank:token", res.data.token);
            console.log(res.data);
            setError('');
            setFlag(localStorage.getItem(`@C6Bank:token`));
        } catch{
            setError('Login/Senha inválida');
            return
        }    
    }

    useEffect(() => {
        setFlag(localStorage.getItem(`@C6Bank:token`));
    },[])
    
    function onSair(){
        localStorage.removeItem(`@C6Bank:token`)
        alert('token liberado');
        window.location.reload();
    }

    return (
        <>
            <h1 id="h1criarconta">Fazer login: </h1>
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
            <button type="submit" onClick={onSair} >Sair</button>

            {error&&<span>{error}</span>}
            {flag && <Pesquisa />}
        </>
    );
}