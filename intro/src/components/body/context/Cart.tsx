
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Product } from '../../../type';
import styles from './Card.module.css'
import { FC } from "react";

const Cart: FC = () => {
    const { items } = useTypedSelector(state => state.cart)
    console.log(items)
    const { removeFromCart } = useAction();
        
    return (
        <div>
        {items.length ? (
          items.map((product: Product) => (
            <div key={product.id}>
              <img className={styles.img} src={product.image} alt={product.title} />
              <h3 className={styles.heading}>{product.title}</h3>
              <p className={styles.subtitle}>{product.description}</p>
              <div className={styles.footer}>
                <p className={styles.price}>Цена: {product.price}</p>
                <button onClick={() => removeFromCart(product.id)}> Удалить </button>
              </div>
            </div>
          ))
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
    );
  };
  
  export default Cart;