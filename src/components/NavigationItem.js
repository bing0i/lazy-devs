import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
  const { text, href, clicked, handleClick } = props;

  return (
    <li className="inline-block">
      <Link
        to={href}
        onClick={handleClick}
        className={`inline-block uppercase py-4 mx-2
          dark:hover:text-dark-hover-text
          ${clicked ? 'text-accent' : 'text-white dark:text-dark-text'}
        `}
      >
        {text}
      </Link>
    </li>
  );
}
