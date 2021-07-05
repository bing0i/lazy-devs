import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { FE_DOMAIN } from '../assets/urlConstants';

const Homepage = () => {
  const categories = useSelector((state) => state.categories);
  const posts = useSelector((state) => state.posts);

  return (
    <div className="grid grid-cols-5 my-9">
      <div></div>
      <div className="grid grid-flow-row col-span-3 gap-9 text-light-text">
        {categories.map((category) => {
          return (
            <section
              className={`shadow-md rounded-xl py-9
              transition duration-500 ease-in-out
              transform hover:-translate-y-1 hover:scale-110
            `}
              key={category._id}
            >
              <h2 className="text-sm font-bold pl-9 text-hover-accent">
                {category.title.replace('-', ' ').toUpperCase()}
              </h2>
              <ul className="grid grid-flow-row">
                {posts
                  .filter((post) => post.category === category.title)
                  .map((post) => (
                    <li key={post._id}>
                      <Link
                        className={`block py-2 text-lg text-justify px-20 hover:bg-accent hover:text-hover-accent
                        transition duration-300 ease-in-out
                        transform hover:scale-105`}
                        to={`${FE_DOMAIN}/${post.category}/${post._id}`}
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default memo(Homepage);
