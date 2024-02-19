import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from '../scss/News.module.scss';

import Reaction from '../components/Reaction';

type ItemInfo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const News = () => {
  const [item, setItem] = React.useState<ItemInfo>({
    userId: 0,
    id: 0,
    title: '',
    body: '',
  });

  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      })
      .catch((err) => {
        console.log(err);
      });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={style.News}>
      <div className={style.Header}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={style.ButtonBack}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="#0A0A0A" />
            </svg>
            <span>Вернуться к статьям</span>
          </div>
        </Link>
        <div className={style.Reaction}>
          <Reaction {...item} />
        </div>
      </div>
      <h1 className={style.Title}>{item?.title}</h1>
      <div className={style.Wrapper}>
        <div className={style.Content}>
          <img src="https://placehold.co/848x477" alt="News" />
          <div className={style.DivDiscription}>
            <p className={style.Discription}>{item?.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
