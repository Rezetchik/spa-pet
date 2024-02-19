import React from 'react';
import style from './scss/App.module.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';

type ContextProps = {
  Like: number[];
  DisLike: number[];
  setLike?: (e: number[]) => void;
  setDisLike?: (e: number[]) => void;
  turnLike: boolean[];
  turnDisLike: boolean[];
  setTurnLike?: (e: boolean[]) => void;
  setTurnDisLike?: (e: boolean[]) => void;
  length: number;
};

const defaultContext = {
  Like: [0],
  DisLike: [0],
  turnLike: [false],
  turnDisLike: [false],
  length: 0,
};

type TextInfo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const AppContext = React.createContext<ContextProps>(defaultContext);

function App() {
  const [text, setText] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const length: number = text.length;

  const [Like, setLike] = React.useState<number[]>([0]);
  const [DisLike, setDisLike] = React.useState<number[]>([0]);
  const [turnLike, setTurnLike] = React.useState<boolean[]>([false]);
  const [turnDisLike, setTurnDisLike] = React.useState<boolean[]>([false]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setIsLoaded(true);
        setText(json);
        RenderLike(json);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  function RenderLike(obj: TextInfo[]) {
    const max = 50;
    const min = 0;
    setLike(
      Array.from({ length: obj.length }, () => Math.floor(Math.random() * (max - min + 1)) + min),
    );
    setDisLike(
      Array.from({ length: obj.length }, () => Math.floor(Math.random() * (max - min + 1)) + min),
    );
    setTurnLike(Array.from({ length: obj.length }, () => false));
    setTurnDisLike(Array.from({ length: obj.length }, () => false));
  }

  return (
    <div className={style.App}>
      <AppContext.Provider
        value={{
          Like,
          DisLike,
          setLike,
          setDisLike,
          turnLike,
          turnDisLike,
          setTurnLike,
          setTurnDisLike,
          length,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home text={text} error={error} isLoaded={isLoaded} length={length} />}
          />
          <Route path="/news/:id" element={<News />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
