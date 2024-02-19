import React from 'react';

import style from '../scss/ButtonMore.module.scss';

const ButtonMore: React.FC = () => {
  return (
    <div className={style.Button}>
      <span>Читать далее</span>
    </div>
  );
};

export default ButtonMore;
