import React from 'react';
import { Product } from '../../../type';
import styles from './Card.module.css'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';


const Card: React.FC<{ product: Product }> = ({ product }) => {
    const {items } = useTypedSelector(state => state.cart)
    
    const {addToCart, removeFromCart} = useAction();
    // const { removeFromCart } = useAction();
    
    const isCart = items.some(item => item.id == product.id)

    function onClick() {
        isCart ? removeFromCart(product.id) : addToCart(product)
    }

    
    return (
        <div className={styles.card}>
    <img className={styles.img} src={product.image} alt={product.title} />
    <h3 className={styles.heading}>{product.title}</h3>
            <p className={styles.subtitle}>{product.description}</p>
           <div className={styles.footer}>
            <p className={styles.price}>Цена: {product.price}</p>
                <button onClick={onClick} className={styles.button} type="button">
                    { isCart ? 'Такой элемент есть' : 'Add to cart' }
                </button>
            </div>
         
       
      
        </div>
    );
};

export default Card;