import { useSelector } from 'react-redux';
import Card from './Card';

export default function TopicPage(props) {
  const { category } = props;
  const posts = useSelector(
    (state) => state.posts[category.toLowerCase().replace(/\s/g, '')]
  );

  return (
    <div className="grid grid-cols-5 bg-light-bg dark:bg-dark-bg">
      <div></div>
      <section className="grid grid-flow-row col-span-3 gap-3 my-8 justify-self-stretch">
        {posts.map((post, index) => {
          return (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              category={category}
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
