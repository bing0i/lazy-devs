import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import NavigationItem from './NavigationItem';
import logo from '../assets/logo.gif';

const NavigationBar = () => {
  const categories = useSelector(state => state.categories);
  const isLogin = useSelector(state => state.isLogin);
  const isLoginText = isLogin ? 'log out' : 'log in';
  const dispatch = useDispatch();

  const [clickedPath, setClickedPath] = useState('');
  const onItemClick = useCallback(path => setClickedPath(path), []);

  return (
    <nav className="grid grid-cols-10 px-9">
      <ul className="col-span-8">
        <li className="inline-block">
          <Link
            to={'/'}
            className={`mx-3 inline-block align-middle py-4
            transition duration-300 ease-in-out
            hover:text-light-text transform hover:scale-150
            `}
          >
            <img src={logo} alt="logo" className="h-5" />
          </Link>
        </li>
        {categories.map(category => {
          return (
            <NavigationItem
              key={category._id}
              text={category.title.replace('-', ' ')}
              path={category.title}
              clicked={category.title === clickedPath}
              onItemClick={onItemClick}
            />
          );
        })}
      </ul>

      <ul className="col-span-2 justify-self-end">
        {isLogin && (
          <NavigationItem
            text={'create post'}
            path={'create-post'}
            clicked={clickedPath === categories.length}
            onItemClick={onItemClick}
          />
        )}
        <li className="inline-block">
          <Link
            to={`/${isLogin ? '' : isLoginText.replace(' ', '')}`}
            onClick={() => {
              onItemClick(`/${isLogin ? '' : isLoginText.replace(' ', '')}`);
              isLogin && dispatch({ type: 'logout' });
            }}
            className={`text-sm font-bold inline-block uppercase py-4 mx-3
              ${
                (isLogin ? '' : isLoginText.replace(' ', '') === clickedPath)
                  ? 'text-hover-accent'
                  : 'text-gray-500'
              }
              transition duration-300 ease-in-out
              hover:text-light-text transform hover:scale-110
            `}
          >
            {isLoginText}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(NavigationBar);
