import React from 'react';
import style from '../scss/Home.module.scss';

import Search from '../components/Search';
import MainBlock from '../components/MainBlock';
import NewsBlock from '../components/NewsBlock';

type HomeProps = {
  text: { userId: number; id: number; title: string; body: string }[];
  error: any;
  isLoaded: boolean;
  length: number;
};

type ItemInfo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home: React.FC<HomeProps> = ({ text, error, isLoaded, length }) => {
  const even = text.filter((_, id: number) => id % 2 === 1);
  const uneven = text.slice(1, length).filter((_, id: number) => id % 2 === 1);

  const [search, setSearch] = React.useState('');

  const mainnews = text
    .slice(0, 1)
    .filter((obj: ItemInfo) => {
      if (obj.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj: ItemInfo) => <MainBlock key={obj.id} {...text[0]} />);

  const leftnews = even
    .filter((obj: ItemInfo) => {
      if (obj.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj: ItemInfo) => <NewsBlock key={obj.id} {...obj} />);

  const rightnews = uneven
    .filter((obj: ItemInfo) => {
      if (obj.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj: ItemInfo) => <NewsBlock key={obj.id} {...obj} />);

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        <div className={style.Header}>
          <header className={style.HeaderSpan}>Блог</header>
          <span className={style.Description}>
            Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим
            зарубежные статьи
          </span>
        </div>
        <Search search={search} setSearch={setSearch} />
        {leftnews.length === 1 || rightnews.length === 1 ? (
          (leftnews.length === 1 && <MainBlock {...leftnews[0].props} />) ||
          (rightnews.length === 1 && <MainBlock {...rightnews[0].props} />)
        ) : (
          <>
            {mainnews}
            <div className={style.Content}>
              <div className={style.Items}>{leftnews}</div>
              <div className={style.Items}>{rightnews}</div>
            </div>
            {mainnews.length === 0 && leftnews.length === 0 && rightnews.length === 0 && (
              <div className={style.SpanFooter}>
                <span>Ничего не найдено</span>
              </div>
            )}
          </>
        )}
      </>
    );
  }
};
export default Home;
