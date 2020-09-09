import React, { useState } from 'react';
// import {uuid} from 'uuidv4';
import axios from 'axios';

import Pesquisa from '../components/Pesquisa'

// const userInfo = [
//     {
//         id: 1,
//         email:"teste@hotmail.com",
//         password:"1234",
//     },
//     {
//         id: 2,
//         email:"tes@hotmail.com",
//         password:"14",
//     }
// ];

export default function Lista() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onLoginSubmit(e) {
        e.preventDefault();
            // if(email !== '' || password !== '') {
            //     const passed = []
            //     for (var i = 0; i < userInfo.length; i++) {
            //         if(userInfo[i].email === email){
            //             if(userInfo[i].password === password)
            //                 passed.push(userInfo[i])
            //         }
            //     }       
            //     if(passed.length === 0){
            //         alert("Dados incorretos!");
            //     }else{
            //         localStorage.setItem("@C6Bank:token", uuid());
            //         alert("Dados corretos!");      
            //     }
            // }
            // else {
            //     alert("Insira os dados");
            // }
        
            const res = await axios.post('https://reqres.in/api/login', {"email": email,
            "password": password});

            localStorage.setItem("@C6Bank:token", res.data.token);
            console.log(res.data);
    }

    return (
        <>
            <h1 id="h1criarconta">Fazer login: </h1>
            <form onSubmit={onLoginSubmit}>
                <label htmlFor="email">E-mail: </label>
                <input 
                    id="email" 
                    type="text" 
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

            <Pesquisa />
        </>
    );
}