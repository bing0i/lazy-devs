import showdown from 'showdown';

export default function Post(props) {
  const { post, category } = props;
  const mdConverter = new showdown.Converter();

  return (
    <section>
      <p>{category}</p>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: mdConverter.makeHtml(post.content),
        }}
      ></div>
    </section>
  );
}
