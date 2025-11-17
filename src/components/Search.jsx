//utils:
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// assets:
import btnSearch from './../assets/ic_Search.png';

//styles:
import styles from './Search.module.scss';

function Search() {
        const [query, setQuery] = useState('');
        const navigate = useNavigate();

        const buscarProduto = () => {
        if (!query.trim()) return;

        fetch(`http://localhost:3001/produto?q=${query}`)
        .then(res => res.json())
        .then(data => {
            // navega para a outra página enviando o produto
            navigate('/resultado', { state: { produto: data } });
        })
        .catch(err => console.error('Erro ao buscar produto:', err));
    };
    
    return (
        <div className={styles.search}>
            <input type='text' placeholder="Nunca dejes de buscar" value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick={buscarProduto}>
                <img src={btnSearch} alt="Logo do Mercado Livre" />
            </button>
        </div>
    )
}

export default Search