import React from 'react';
import { AppContext } from '../App';
import style from '../scss/Reaction.module.scss';

type NewsBlockProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Reaction: React.FC<NewsBlockProps> = (obj) => {
  const {
    Like,
    DisLike,
    setLike,
    setDisLike,
    turnLike,
    setTurnLike,
    turnDisLike,
    setTurnDisLike,
    length,
  } = React.useContext(AppContext);

  const NewTurns = (mass: boolean[], boolean: boolean) => {
    return mass
      .slice(0, obj?.id - 1)
      .concat(boolean)
      .concat(mass.slice(obj?.id, length));
  };

  const NewLikes = (mass: number[], operand: boolean) => {
    if (operand) {
      return mass
        .slice(0, obj?.id - 1)
        .concat(mass[obj?.id - 1] + 1)
        .concat(mass.slice(obj?.id, length));
    }
    return mass
      .slice(0, obj?.id - 1)
      .concat(mass[obj?.id - 1] - 1)
      .concat(mass.slice(obj?.id, length));
  };

  const clickLike = () => {
    if (!turnLike[obj?.id - 1] && !turnDisLike[obj?.id - 1]) {
      setTurnLike?.(NewTurns(turnLike, true));
      return setLike?.(NewLikes(Like, true));
    }
    setLike?.(NewLikes(Like, true));
    setDisLike?.(NewLikes(DisLike, false));

    setTurnLike?.(NewTurns(turnLike, true));
    setTurnDisLike?.(NewTurns(turnDisLike, false));
  };

  const clickDisLike = () => {
    if (!turnLike[obj?.id - 1] && !turnDisLike[obj?.id - 1]) {
      setTurnDisLike?.(NewTurns(turnDisLike, true));
      return setDisLike?.(NewLikes(DisLike, true));
    }
    setLike?.(NewLikes(Like, false));
    setDisLike?.(NewLikes(DisLike, true));

    setTurnLike?.(NewTurns(turnLike, false));
    setTurnDisLike?.(NewTurns(turnDisLike, true));
  };

  //   if (!turnLike[obj?.id] && !turnDisLike[obj?.id]) {
  //     setTurnLike(
  //       turnLike
  //         .slice(0, obj?.id)
  //         .concat(true)
  //         .concat(turnLike.slice(obj?.id + 1, length)),
  //     );
  //     return setLike(
  //       Like.slice(0, obj?.id)
  //         .concat(Like[obj?.id] + 1)
  //         .concat(Like.slice(obj?.id + 1, length)),
  //     );
  //   }
  //   setLike(
  //     Like.slice(0, obj?.id)
  //       .concat(Like[obj?.id] + 1)
  //       .concat(Like.slice(obj?.id + 1, length)),
  //   );
  //   setDisLike(
  //     Like.slice(0, obj?.id)
  //       .concat(DisLike[obj?.id] - 1)
  //       .concat(DisLike.slice(obj?.id + 1, length)),
  //   );

  //   setTurnLike(
  //     turnLike
  //       .slice(0, obj?.id)
  //       .concat(true)
  //       .concat(turnLike.slice(obj?.id + 1, length)),
  //   );
  //   setTurnDisLike(
  //     turnDisLike
  //       .slice(0, obj?.id)
  //       .concat(false)
  //       .concat(turnDisLike.slice(obj?.id + 1, length)),
  //   );
  // };

  // const clickDisLike = () => {
  //   if (!turnLike[obj?.id] && !turnDisLike[obj?.id]) {
  //     setTurnDisLike(
  //       turnDisLike
  //         .slice(0, obj?.id)
  //         .concat(true)
  //         .concat(turnDisLike.slice(obj?.id + 1, length)),
  //     );
  //     return setDisLike(
  //       Like.slice(0, obj?.id)
  //         .concat(DisLike[obj?.id] + 1)
  //         .concat(DisLike.slice(obj?.id + 1, length)),
  //     );
  //   }
  //   setLike(
  //     Like.slice(0, obj?.id)
  //       .concat(Like[obj?.id] - 1)
  //       .concat(Like.slice(obj?.id + 1, length)),
  //   );
  //   setDisLike(
  //     Like.slice(0, obj?.id)
  //       .concat(DisLike[obj?.id] + 1)
  //       .concat(DisLike.slice(obj?.id + 1, length)),
  //   );

  //   setTurnLike(
  //     turnLike
  //       .slice(0, obj?.id)
  //       .concat(false)
  //       .concat(turnLike.slice(obj?.id + 1, length)),
  //   );
  //   setTurnDisLike(
  //     turnDisLike
  //       .slice(0, obj?.id)
  //       .concat(true)
  //       .concat(turnDisLike.slice(obj?.id + 1, length)),
  //   );
  // };

  return (
    <div className={style.Mark}>
      <div className={style.Like}>
        {turnLike[obj?.id - 1] ? (
          <svg
            className={style.True}
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66666 26.6667H5.33332C6.06666 26.6667 6.66666 26.0667 6.66666 25.3333V13.3333C6.66666 12.6 6.06666 12 5.33332 12H2.66666V26.6667ZM29.1067 17.1733C29.2533 16.84 29.3333 16.48 29.3333 16.1067V14.6667C29.3333 13.2 28.1333 12 26.6667 12H19.3333L20.56 5.8C20.6267 5.50667 20.5867 5.18667 20.4533 4.92001C20.1467 4.32001 19.76 3.77334 19.28 3.29334L18.6667 2.66667L10.12 11.2133C9.61332 11.72 9.33332 12.4 9.33332 13.1067V23.56C9.33332 25.2667 10.7333 26.6667 12.4533 26.6667H23.2667C24.2 26.6667 25.08 26.1733 25.56 25.3733L29.1067 17.1733Z"
              fill="#219653"
            />
          </svg>
        ) : (
          <svg
            className={style.False}
            onClick={() => clickLike()}
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66669 27.1667H5.33335C6.06669 27.1667 6.66669 26.5667 6.66669 25.8334V13.8334C6.66669 13.1 6.06669 12.5 5.33335 12.5H2.66669V27.1667ZM29.1067 17.6734C29.2534 17.34 29.3334 16.98 29.3334 16.6067V15.1667C29.3334 13.7 28.1334 12.5 26.6667 12.5H19.3334L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4534 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61335 12.22 9.33335 12.9 9.33335 13.6067V24.06C9.33335 25.7667 10.7334 27.1667 12.4534 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z"
              fill="#959298"
            />
          </svg>
        )}
        <span>{Like[obj?.id - 1]}</span>
      </div>

      <div className={style.DisLike}>
        {turnDisLike[obj?.id - 1] ? (
          <svg
            className={style.True}
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66668 5.83331H5.33334C6.06668 5.83331 6.66668 6.43331 6.66668 7.16665V19.1666C6.66668 19.9 6.06668 20.5 5.33334 20.5H2.66668V5.83331ZM29.1067 15.3266C29.2533 15.66 29.3333 16.02 29.3333 16.3933V17.8333C29.3333 19.3 28.1333 20.5 26.6667 20.5H19.3333L20.56 26.7C20.6267 26.9933 20.5867 27.3133 20.4533 27.58C20.1467 28.18 19.76 28.7266 19.28 29.2066L18.6667 29.8333L10.12 21.2866C9.61334 20.78 9.33334 20.1 9.33334 19.3933V8.95331C9.33334 7.23331 10.7333 5.83331 12.4533 5.83331H23.2533C24.2 5.83331 25.0667 6.32665 25.5467 7.12665L29.1067 15.3266Z"
              fill="#EB5757"
            />
          </svg>
        ) : (
          <svg
            onClick={() => clickDisLike()}
            className={style.False}
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66665 5.33333H5.33331C6.06665 5.33333 6.66665 5.93333 6.66665 6.66666V18.6667C6.66665 19.4 6.06665 20 5.33331 20H2.66665V5.33333ZM29.1066 14.8267C29.2533 15.16 29.3333 15.52 29.3333 15.8933V17.3333C29.3333 18.8 28.1333 20 26.6666 20H19.3333L20.56 26.2C20.6266 26.4933 20.5866 26.8133 20.4533 27.08C20.1466 27.68 19.76 28.2267 19.28 28.7067L18.6666 29.3333L10.12 20.7867C9.61331 20.28 9.33331 19.6 9.33331 18.8933V8.45333C9.33331 6.73333 10.7333 5.33333 12.4533 5.33333H23.2533C24.2 5.33333 25.0666 5.82666 25.5466 6.62666L29.1066 14.8267Z"
              fill="#3A3541"
              fillOpacity="0.54"
            />
          </svg>
        )}
        <span>{DisLike[obj?.id - 1]}</span>
      </div>
    </div>
  );
};

export default Reaction;
