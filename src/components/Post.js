import showdown from 'showdown';

export default function Post(props) {
  const { post } = props;
  const mdConverter = new showdown.Converter();

  return (
    <div className="grid grid-cols-5 my-8">
      <div></div>
      <section className="col-span-3">
        <h1 className="text-3xl font-bold text-center">{post.title}</h1>
        <p className="mb-4 text-sm italic text-center text-gray-600">
          {post.description}
        </p>
        <div
          className="grid grid-flow-row gap-4 markdown"
          dangerouslySetInnerHTML={{
            __html: mdConverter.makeHtml(post.content),
          }}
        ></div>
      </section>
      <div></div>
    </div>
  );
}
