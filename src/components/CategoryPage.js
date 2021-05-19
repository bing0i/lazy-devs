import { useSelector } from 'react-redux';
import Card from './Card';

export default function TopicPage(props) {
  const { category } = props;
  console.log('hello world');
  console.log(category);
  const posts = useSelector(
    (state) => state.posts.categories[category.toLowerCase().replace(/\s/g, '')]
  );
  console.log(posts);

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
            detail={post.description}
            imagePath={''}
            imageAlt={''}
          />
        );
      })}
    </section>
  );
}
