import Card from './Card';

export default function TopicPage(props) {
  const { cards } = props;
  return (
    <section
      className="grid grid-cols-1 justify-items-center
    bg-light-bg dark:bg-dark-bg"
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            detail={card.detail}
            imagePath={card.imagePath}
            imageAlt={card.imageAlt}
          />
        );
      })}
    </section>
  );
}
