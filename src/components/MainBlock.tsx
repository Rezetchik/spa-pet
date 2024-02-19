import React from 'react';
import { Link } from 'react-router-dom';

import style from '../scss/MainBlock.module.scss';

import Reaction from './Reaction';
import ButtonMore from './ButtonMore';

type MainBlockProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const MainBlock: React.FC<MainBlockProps> = (text) => {
  console.log(text);
  return (
    <div className={style.Block}>
      <div className={style.DivImg}>
        <img src="https://placehold.co/1140x600" alt="News" />
      </div>
      <div className={style.Discription}>
        <div className={style.Title}>
          <h1>{text?.title}</h1>
          <div className={style.Reaction}>
            <Reaction {...text} />
          </div>
        </div>
        <div className={style.Span}>
          <span>{text?.body}</span>
        </div>
        <div className={style.Footer}>
          <Link to={`/News/${text.id}`} style={{ textDecoration: 'none' }}>
            <ButtonMore />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
