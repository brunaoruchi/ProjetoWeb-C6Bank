import React, {useState} from 'react';

function Cadastro() {
    const [newEmail, setNewEmail] = useState([]);
    const [newPassword, setNewPassword] = useState([]);

    return (
        <>
            <h1 id="h1criarconta">Criar uma conta: </h1>
            <form >
                <label htmlFor="email">E-mail: </label>
                <input 
                    id="email" 
                    type="text" 
                    value={newEmail} 
                    onChange={e => setNewEmail(e.target.value)}
                />
                <label htmlFor="password">Senha: </label>
                <input 
                    id="password" 
                    type="password" 
                    value={newPassword} 
                    onChange={e => setNewPassword(e.target.value)}
                />
                <button type="submit">Criar</button>
            </form>
        </>
    );
}

export default Cadastro;