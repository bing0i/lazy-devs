export default function NavigationItem(props) {
  const { text, href, clicked, handleClick } = props;

  return (
    <li
      className={`
      uppercase text-center py-2 mx-12 rounded-t-xl cursor-pointer
      hover:text-light-text hover:bg-light-bg dark:hover:text-dark-text dark:hover:bg-dark-bg 
      ${
        clicked
          ? 'text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg'
          : 'text-light-bg bg-light-text dark:text-dark-bg dark:bg-dark-text'
      }
      `}
      onClick={handleClick}
    >
      <a href={href}>{text}</a>
    </li>
  );
}

// text-light-bg bg-light-text dark:text-dark-bg dark:bg-dark-text
