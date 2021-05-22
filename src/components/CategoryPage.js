import { useSelector } from 'react-redux';
import Card from './Card';

export default function CategoryPage(props) {
  const { category } = props;
  const posts = useSelector((state) => state.posts);
  const categoryPosts = posts.filter((post) => post.category === category);

  return (
    <div className="">
      <section className="grid grid-flow-col justify-items-center my-9 gap-9">
        {categoryPosts.map((post) => {
          return (
            <Card
              key={post._id}
              id={post._id}
              title={post.title}
              description={post.description}
              category={post.category}
              imagePath={''}
              imageAlt={''}
            />
          );
        })}
      </section>
    </div>
  );
}
