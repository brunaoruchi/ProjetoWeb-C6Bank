import React, {useState} from 'react';
import axios from 'axios';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onCadastroSubmit(e) {
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
        
            const res = await axios.post('https://reqres.in/api/register', {"email": email,
            "password": password});

            console.log(res.data);
    }


    return (
        <>
             <h1 id="h1criarconta">Fazer login: </h1>
            <form onSubmit={onCadastroSubmit}>
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
                <button type="submit">Criar</button>
            </form>
        </>
    );
}

export default Cadastro;