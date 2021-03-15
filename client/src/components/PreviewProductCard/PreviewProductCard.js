import { Link } from "react-router-dom";
import styles from './PreviewProductCard.module.css';
import cx from 'classnames';


const PreviewProductCard = ({product})=>{

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <Link className={styles.textLink} to={`/products/${product.id}`}>
                <div className={styles.top}>
                <img src={product.imageUrl} />
                </div>
            </Link>
            <div className={styles.bottom}>
                <div className={styles.left}>
                <div className={styles.details}>
                   
                    <h4>{product.name}</h4>
                    <p>{product.price} KR</p>
                   
                </div>
                <div className={styles.buy}>
                    <button className={styles.addToCart}>
                    <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.inside}>
            <div className={styles.icon}>
                <i className="fas fa-info-circle"></i>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                <h5>{product.moon} | {product.moonphase} | {product.zodiac}</h5><br/>
                <p>{product.description}</p>
                </div>
            </div>
            </div>
            </div>
    );

};


export default PreviewProductCard;