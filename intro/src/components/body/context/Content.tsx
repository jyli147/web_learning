import style from './Content.module.css'
import Categories from './Categories/Categories';
import Cards from './Cards/Cards';

const Content = () => {
  

  return (
      <div className={style.content}>
      <Categories></Categories>
      <Cards></Cards>
      </div>
    );
};

export default Content;