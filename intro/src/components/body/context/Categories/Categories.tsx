import { useQuery } from 'react-query';
import { Category } from '../../../../type';
import { CategoryService } from '../../../../services/productService';
import style from './categories.module.css'


const Categories = () => {
  const { data, error, isLoading } = useQuery<Category[], string>(['categories'], () => CategoryService.getCategories());
    
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.length) {
    return <div>No data available</div>;
  }

  return (
    <nav className={style.categories} >
     
      {data.map((item) => (
       
          <button key={item.id} className={style.category}>{item.category}</button>
        
      ))}
     
    </nav>
  );
};

export default Categories;

