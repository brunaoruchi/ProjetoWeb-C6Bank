import React from 'react';

function Lista() {
    return (
        <>
            <h1 id="h1criarconta">Fazer login: </h1>
            <form method="post">
                <label htmlFor="email">E-mail: </label>
                <input id="email" type="text"/>
                <label htmlFor="password">Senha: </label>
                <input id="password" type="password"/>
                <button>Entrar</button>
            </form>
        </>
    );
}

export default Lista;