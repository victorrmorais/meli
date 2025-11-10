// assets:
import btnSearch from './../assets/ic_Search.png';

//styles:
import styles from './Search.module.scss';

function Search() {
    return (
        <div className={styles.search}>
            <input type='text' placeholder="Nunca dejes de buscar"></input>
            <button>
                <img src={btnSearch} alt="Logo do Mercado Livre" />
            </button>
        </div>
    )
}

export default Search