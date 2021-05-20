import showdown from 'showdown';

export default function Post(props) {
  const { post } = props;
  const mdConverter = new showdown.Converter();

  return (
    <section>
      <h1 className="text-3xl font-bold text-center">{post.title}</h1>
      <p className="text-sm italic text-center text-gray-600">
        {post.description}
      </p>
      <div
        className="grid grid-flow-row gap-4 my-7 markdown"
        dangerouslySetInnerHTML={{
          __html: mdConverter.makeHtml(post.content),
        }}
      ></div>
    </section>
  );
}
