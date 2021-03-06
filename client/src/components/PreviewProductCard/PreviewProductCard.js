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
                    <Link className={styles.textLink }to={`/products/${product.id}`}>
                    <h4>{product.name}</h4>
                    <p>{product.price} KR</p>
                    </Link>
                </div>
                <div className={styles.buy}>
                    <button className={styles.addToCart}>
                    <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
                </div>
            </div>
            </div>

            <div className="inside">
            <div className="icon">
                <i className="fas fa-info-circle"></i>
            </div>
            <div className="contents">
                <div className="text">
                <h5>{product.moon} {product.zodiac}</h5><br/>
                <p>{product.description}</p>
                </div>
            </div>
            </div>
            </div>
    );

};


export default PreviewProductCard;