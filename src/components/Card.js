import { Link } from 'react-router-dom';

export default function Card(props) {
  const { title, description, category } = props;
  return (
    <section className="w-full">
      <Link
        to={(
          '/' +
          category.toLowerCase().replace(/\s/g, '-') +
          '/' +
          title.toLowerCase()
        ).replace(/\s/g, '-')}
        className="self-end col-span-3 text-3xl font-bold hover:text-accent"
      >
        {title}
      </Link>
      <p className="self-start col-span-3 text-sm text-dark-hover-text">
        {description}
      </p>
    </section>
  );
}
