import React from 'react';
import { Link } from 'react-router-dom';

import style from '../scss/NewsBlock.module.scss';

import Reaction from './Reaction';
import ButtonMore from './ButtonMore';

type NewsBlockProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const NewsBlock: React.FC<NewsBlockProps> = (obj) => {
  return (
    <div className={style.Block}>
      <div className={style.DivImg}>
        <img src="https://placehold.co/558x273" alt="news" />
      </div>
      <div className={style.Title}>
        <h1>{obj.title}</h1>
        <div className={style.Reaction}>
          <Reaction {...obj} />
          <Link to={`/News/${obj.id}`} style={{ textDecoration: 'none' }}>
            <ButtonMore />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
