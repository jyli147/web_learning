import { useQuery } from 'react-query';
import { ProductService } from '../../../services/productService';
import Card from '../card/Card';
import { Product } from '../../../type';
import style from './Content.module.css'
import Categories from './Categories/Categories';

const Content = () => {
  const { data, error, isLoading } = useQuery<Product[], string>([' products'], () => ProductService.getProducts())

  return (
      <div className={style.content}>
        <Categories></Categories>
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
      </div>
    );
};

export default Content;