import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
  const { text, href, clicked, handleClick } = props;

  return (
    <li className="inline-block">
      <Link
        to={'/' + href}
        onClick={handleClick}
        className={`text-sm font-bold inline-block uppercase py-4 mx-3
          hover:text-light-text
          ${clicked ? 'text-hover-accent' : 'text-gray-500'}
        `}
      >
        {text}
      </Link>
    </li>
  );
}
