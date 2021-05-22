import { useState } from 'react';
import NavigationItem from './NavigationItem';

export default function NavigationBar(props) {
  const { categories } = props;
  const [clickedIndex, setClickedIndex] = useState(0);

  function handleClick(e, index) {
    setClickedIndex(index);
  }

  return (
    <nav className="shadow-md px-9 bg-accent">
      <ul>
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
    </nav>
  );
}
