//utils:
import { useLocation, useNavigate, Link } from 'react-router-dom';

// assets:
import productImg from '../assets/product.png'

// layout, pages, components and others:
import Top from '../layout/Top';
import BreadCrumb from '../components/Breadcrumb';
import styles from './SearchResult.module.scss';


function SearchResult() {
    
    const { state } = useLocation();

    const produto = state?.produto;

    return (
        <div>
            <Top />
            <BreadCrumb />
            <Link to="/product" className={styles.linkProduct}>
                <div className={styles.search_result}>
                    <div className={styles.block_result}>
                        <div className={styles.block_image}>
                            <figure>
                                <img src={productImg} alt="imagem de uma mão segurando um produto da Apple na cor cinza" />    
                            </figure>    
                        </div>
                        <div className={styles.block_txt}>
                            <div className={styles.block_price}>
                                <strong>$ {produto.preco}</strong>
                            </div>
                            <div className={styles.block_description}>
                                <p>{produto.descricao}</p>
                            </div>
                        </div>
                        <div className={styles.block_txt_right}>
                            <span>lorem ipsum</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SearchResult