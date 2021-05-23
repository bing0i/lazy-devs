import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationItem from './NavigationItem';

export default function NavigationBar(props) {
  const { categories } = props;
  const [clickedIndex, setClickedIndex] = useState(0);
  const isLogin = useSelector((state) => state.isLogin);
  const isLoginText = isLogin ? 'log out' : 'log in';
  const dispatch = useDispatch();

  function handleClick(e, index) {
    setClickedIndex(index);
  }

  return (
    <nav className="grid grid-cols-10 px-9">
      <ul className="col-span-8">
        {categories.map((category, index) => {
          return (
            <NavigationItem
              key={index}
              text={category.replace('-', ' ')}
              href={category}
              clicked={clickedIndex === index}
              handleClick={(e) => handleClick(e, index)}
            />
          );
        })}
      </ul>
      <ul className="col-span-2 justify-self-end">
        {isLogin && (
          <NavigationItem
            text={'new post'}
            href={'post'}
            clicked={clickedIndex === categories.length}
            handleClick={(e) => handleClick(e, categories.length)}
          />
        )}
        <NavigationItem
          text={isLoginText}
          href={isLogin ? 'home' : isLoginText.replace(' ', '')}
          clicked={clickedIndex === categories.length + 1}
          handleClick={(e) => {
            handleClick(e, categories.length + 1);
            dispatch({ type: 'logout' });
          }}
        />
      </ul>
    </nav>
  );
}
