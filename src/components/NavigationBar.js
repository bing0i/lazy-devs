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
    setClickedIndex(index);
  }

  return (
    <nav
      className={`text-sm text-light-text dark:text-dark-text bg-dark-nav shadow-md`}
    >
      <ul>
        {topics.map((topic, index) => {
          return (
            <NavigationItem
              key={index}
              text={topic}
              href={topic.replace(/\s/g, '-')}
              clicked={clickedIndex === index}
              handleClick={(e) => handleClick(e, index)}
            />
          );
        })}
      </ul>
    </nav>
  );
}
