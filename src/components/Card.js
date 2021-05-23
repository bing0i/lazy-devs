import { Link } from 'react-router-dom';

export default function Card(props) {
  const { id, title, description, category, date } = props;
  return (
    <div
      className={`flex-1 m-6 rounded-xl gap-4 grid shadow-md p-9 text-justify 
      transition duration-300 ease-in-out
      hover:bg-accent transform hover:-translate-y-1 hover:scale-105`}
    >
      <Link
        to={'/' + category + '/' + id}
        className="self-end text-xl font-bold transform text-light-text hover:text-hover-accent"
      >
        {title}
      </Link>
      <p className="self-start text-sm">{description}</p>
      <p className="self-end text-sm text-gray-500 justify-self-end">{date}</p>
    </div>
  );
}
