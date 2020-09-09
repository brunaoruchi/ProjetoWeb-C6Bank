import React, {useState} from 'react';
import axios from 'axios';

function Pesquisa() {
    const [campoTexto, setCampoTexto] = useState('');
    const [paises, setPaises] = useState([]);

    async function campoTextoSubmit(e) {
        e.preventDefault();
        const res = await axios.get('https://api.coingecko.com/api/v3/events/countries');

        const aux =res.data.data.filter(function(pais) {
            if(pais.country !== null)
                return pais.country.toLowerCase().includes(campoTexto.toLowerCase());
            return false;
        })
        setPaises(aux);
    }

    return (
        <>
            <form onSubmit={campoTextoSubmit}>
                <label htmlFor="pais">País: </label>
                <input 
                    id="pais" 
                    type="text" 
                    value={campoTexto} 
                    onChange={e => setCampoTexto(e.target.value)}
                />
                
                <button type="submit">Criar</button>
            </form>

            {paises.map(pais => (
                <li key={pais.country}>{pais.country}</li>
            ))}
        </>
    );
}

export default Pesquisa;