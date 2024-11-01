import { useQuery } from 'react-query';
import { Product } from '../../../../type';
import { ProductService } from '../../../../services/productService';
import style from './Cards.module.css'
import Card from './card/Card';

const Cards = () => {
    const { data, error, isLoading } = useQuery<Product[], string>([' products'], () => ProductService.getProducts())
    return (
        <div className={style.cards}>
        {error && (<div>{error}</div>)} 
        {isLoading ? (
          <div>Loading...</div>
        ) : data?.length ? (
          data?.map(product => <Card key={product.id} product={product}></Card>)
          ) : (
              <div>Нет продуктов</div>
           )} 
        </div>
    );
};

export default Cards;