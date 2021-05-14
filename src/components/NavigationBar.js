import { useState } from 'react';
import NavigationItem from './NavigationItem';

export default function NavigationBar() {
  const topics = [
    'home',
    'data structures',
    'sort algorithms',
    'search algorithms',
  ];
  const [clickedIndex, setClickedIndex] = useState(0);

  function handleClick(e, index) {
    e.preventDefault();
    setClickedIndex(index);
  }

  return (
    <nav>
      <ul
        className={`grid grid-cols-${topics.length} justify-items-stretch text-lg bg-light-text dark:bg-dark-text`}
      >
        {topics.map((topic, index) => {
          return (
            <NavigationItem
              key={index}
              text={topic}
              href=""
              clicked={clickedIndex === index}
              handleClick={(e) => handleClick(e, index)}
            />
          );
        })}
      </ul>
    </nav>
  );
}
