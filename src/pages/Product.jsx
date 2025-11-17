//utils:
import { useLocation, useNavigate } from 'react-router-dom';

// assets:
import imgDetail from '../assets/product-detail.png'

// layout, pages, components and others:
import Top from '../layout/Top';
import BreadCrumb from '../components/Breadcrumb';
import styles from './Product.module.scss';

function Product () {
    return (
        
        <div>
            <Top />
            <BreadCrumb />
            <section className={styles.product_container}>
                <div className={styles.product_container_flex}>
                    <div className={styles.product_img}>
                        <figure>
                            <img src={imgDetail} alt="Imagem de varios celulares de cores distintas enfileirados" />    
                        </figure> 
                    </div>
                    <div className={styles.product_infos}>
                        <h3>Deco Reverse Sombrero Oxford</h3>
                        <span>$ 1.980</span>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className={styles.product_details}>
                    <h3>Descripción del producto</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
        </div>

    )
}

export default Product