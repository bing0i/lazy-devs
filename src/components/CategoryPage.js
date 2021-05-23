import { useSelector } from 'react-redux';
import Card from './Card';
import { DateTime } from 'luxon';

export default function CategoryPage(props) {
  const { category } = props;
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
}
