// utils:
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

// assets:
import logo from './../assets/Logo_ML.png';

//styles:
import styles from './Top.module.scss';
import '../../../meli/src/styles/globals.scss';

//components:
import Search from "../components/Search";

function Top () {
    
    return (
        <nav className={styles.top}>
            <div className={styles.top_centralizer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Logo do Mercado Livre" />
                    </Link>
                </div>
                <Search />
            </div>
        </nav>
    )
}

export default Top