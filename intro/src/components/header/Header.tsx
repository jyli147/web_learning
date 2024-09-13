import { Link } from 'react-router-dom';
import CartIcon from './shopping_cart.png';
import style from './Header.module.css'

const Header: React.FC= () => {
    return (
        <div className={style.header}>
            <h1 className={style.title}>Магазин</h1>
            <Link to='/cart'>
            <img className={style.img} src={CartIcon} alt="Cart" />
            </Link>
        </div>
    );
};

export default Header;