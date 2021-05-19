import showdown from 'showdown';

export default function Post(props) {
  const { post, category } = props;
  const mdConverter = new showdown.Converter();

  return (
    <section>
      <p>{category}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: mdConverter.makeHtml(post.content),
        }}
      ></div>
    </section>
  );
}
