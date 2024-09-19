import { useQuery } from 'react-query';
import { Category } from '../../../../type';
import { CategoryService } from '../../../../services/productService';


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
    <nav>
      {data.map((item) => (
        <div key={item.id}>{item.category}</div>
      ))}
    </nav>
  );
};

export default Categories;

