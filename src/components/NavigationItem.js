import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useCallback } from 'react';
import { FE_DOMAIN } from '../assets/urlConstants';

const NavigationItem = ({ text, path, clicked, onItemClick }) => {
  const handleClick = useCallback(() => onItemClick(path), [onItemClick, path]);

  return (
    <li className="inline-block">
      <Link
        to={`${FE_DOMAIN}/${path}`}
        onClick={handleClick}
        className={`text-sm font-bold inline-block uppercase py-4 mx-3
          ${clicked ? 'text-hover-accent' : 'text-gray-500'}
          transition duration-300 ease-in-out
          hover:text-light-text transform hover:scale-110
        `}
      >
        {text}
      </Link>
    </li>
  );
};

export default memo(NavigationItem);
