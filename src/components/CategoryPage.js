import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { memo } from 'react';
import Card from './Card';

const CategoryPage = ({ category }) => {
  const posts = useSelector((state) => state.posts);
  const categoryPosts = posts.filter((post) => post.category === category);

  return (
    <div>
      <section className="flex flex-wrap">
        {categoryPosts.map((post) => {
          return (
            <Card
              key={post._id}
              id={post._id}
              title={post.title}
              description={post.description}
              category={post.category}
              date={DateTime.fromISO(post.date).toLocaleString(
                DateTime.DATETIME_MED
              )}
            />
          );
        })}
      </section>
    </div>
  );
};

export default memo(CategoryPage);
