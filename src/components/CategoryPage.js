import { useSelector } from 'react-redux';
import Card from './Card';

export default function TopicPage(props) {
  const { category } = props;
  const posts = useSelector(
    (state) => state.posts.categories[category.toLowerCase().replace(/\s/g, '')]
  );

  return (
    <section
      className="grid grid-cols-1 justify-items-center
    bg-light-bg dark:bg-dark-bg"
    >
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
  );
}
