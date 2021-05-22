import { Link } from 'react-router-dom';

export default function Card(props) {
  const { id, title, description, category } = props;
  return (
    <div
      className={`rounded-xl gap-4 grid w-96 shadow-lg p-9 text-justify 
      transition duration-500 ease-in-out
      hover:bg-accent transform hover:-translate-y-1 hover:scale-110`}
    >
      <Link
        to={'/' + category + '/' + id}
        className="self-end text-xl font-bold transform text-light-text hover:text-hover-accent"
      >
        {title}
      </Link>
      <p className="self-start text-sm">{description}</p>
      <p className="justify-self-end self-end text-sm text-gray-500">
        {'01/01/2021'}
      </p>
    </div>
  );
}
