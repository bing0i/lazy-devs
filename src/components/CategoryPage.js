import { useSelector } from 'react-redux';
import Card from './Card';

export default function CategoryPage(props) {
  const { category } = props;
  const posts = useSelector((state) => state.posts);
  const categoryPosts = posts.filter((post) => post.category === category);

  return (
    <div className="grid grid-cols-5 bg-light-bg dark:bg-dark-bg">
      <div></div>
      <section className="grid grid-flow-row col-span-3 gap-3 my-8 justify-self-stretch">
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
      <div></div>
    </div>
  );
}
