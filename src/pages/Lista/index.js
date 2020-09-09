import React, { useState } from 'react';

const userInfo = [
    {
        id: 1,
        email:"teste@hotmail.com",
        password:"1234",
        role:"1"
    },
    {
        id: 2,
        email:"tes@hotmail.com",
        password:"14",
        role:"2"
    }
];

export default function Lista() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    onLoginSubmit = () => {
        if(email != '' || password != '') {
            const passed = []
            for (var i = 0; i < userInfo.length; i++) {
                if(userInfo[i].email == email){
                    if(userInfo[i].password == password)
                        passed.push(userInfo[i])
                }
            }       
            if(passed.length == 0){
                alert("Dados incorretos!");
            }else{
                localStorage.setItem("token", passed[0].role);
                alert("Dados corretos!");      
            }
        }
        else {
            alert("Insira os dados");
        }
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
        </>
    );
}